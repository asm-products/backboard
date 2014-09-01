Meteor.call('repos', function(error, result){
    Session.set('repos', JSON.parse(result.content));
});
  

Template.header.helpers({
  messages: function () {
    return Messages.find();
  },
  isLoggedIn: function () {
    return !!Meteor.user();
  },
})

Template.user_repos.helpers({
  repos: function() {
    return Session.get('repos');
  }
})

Template.header.events({
  'click #logout': function () {
    ServerSession.set('token', null);
    Meteor.logout();
  },
  'click #login': function(event){
    Meteor.loginWithGithub({
      requestPermissions: ['user', 'repo']
      }, function (err) {
      if (err)
          Session.set('errorMessage', err.reason || 'Unknown error');
      else
          ServerSession.set('token', Meteor.user().services.github.accessToken);
          Meteor.call('repos', function(error, result){
              Session.set('repos', JSON.parse(result.content));
          });
      });
  }
})
