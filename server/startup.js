Meteor.startup(function() {
 
  ServiceConfiguration.configurations.remove({
    service : 'github'
  });
 
  ServiceConfiguration.configurations.insert({
    service: 'github',
    clientId: '06fb4db1fec4d349eaf5',
    secret: 'e0de2cc22dd993868fa71bf9afd52d52f9dcd8d6'
  });

});
