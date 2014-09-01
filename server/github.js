Meteor.methods({
  repos: function () {
    return allRepos();
  },
  issues: function (owner, repo) {
    return repoIssues(owner, repo);
  }
});

function allRepos() {
    opts = {};
    opts.sign = true;
    opts.access_token = ServerSession.get('token');

    return Meteor.http.get('https://api.github.com/user/repos', 
        {
        params : opts,
        headers: {"User-Agent": "Meteor/1.0"}
        });

}

function repoIssues(owner, repo) {
    opts = {};
    opts.sign = true;
    opts.access_token = ServerSession.get('token');

    return Meteor.http.get('https://api.github.com/repos/'+owner+'/'+repo+'/issues', 
        {
        params : opts,
        headers: {"User-Agent": "Meteor/1.0"}
        });

}