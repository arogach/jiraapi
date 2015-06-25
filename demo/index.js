var jira = require('../lib/jiraapi');

jira.init({
    password : '11',
    username : 'arogach',
    host : 'https://airbiq.atlassian.net'
});
jira.getProject('DA').then(function(response){
  console.log(response);
});