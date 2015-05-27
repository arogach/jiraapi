var jira = require('../lib/jiraapi');

jira.init({
    password : '11',
    username : 'arogach',
    host : 'https://airbiq.atlassian.net'
});

console.log(jira.getProject('DA'));