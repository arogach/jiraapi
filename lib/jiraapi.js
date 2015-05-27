var request = require('request');
var JiraApi = (function () {
  var password,
      username,
      host,
      port;

    doRequest = function(options, callback) {
      console.log('pass', password);
      options.auth = {
        'user': username,
        'pass': password
      };
      request(options, callback);
  };

  this.getProject = function (project) {
    console.log(project);
    var options = {
      uri: host + ('/rest/api/2/project/' + project),
      method: 'GET'
    };
    doRequest(options, function(error, response, body) {
      console.log(error);
      console.log(response);
      console.log(body);

      if (error) {
        return 'error';
      }

      if (response.statusCode === 404) {
        return 'Invalid project.';
      }

      if (response.statusCode !== 200) {
        return response.statusCode + ': Unable to connect to JIRA during getProject.';
      }

      body = JSON.parse(body);
      return body;
    });
  };

    return {
      init: function (options) {
        console.log(options);
        password = options.password || '';
        username = options.username || '';
        host = options.host || '';
        port = options.port || '';
      },

      getProject: this.getProject

    };
})();

module.exports = JiraApi;