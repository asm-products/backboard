/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

// Filters

var filters = {

  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      alert('Please Log In First.')
      this.stop();
    }
  },


}

Router.onBeforeAction('loading');

// Routes

Router.map(function() {

  this.route('homepage', {
    path: '/'
  });


  this.route('repo/:owner/:repo', {
    template: 'repo',
    waitOn: function () {
        var owner = this.params.owner;
        var repo = this.params.repo;
        Meteor.call('issues', owner, repo, function(error, result){
            Session.set('issues', JSON.parse(result.content));
        });
    }
  }); 


});
