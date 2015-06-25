var request = require('request-promise');
var JiraApi = (function () {
  var password,
      username,
      host,
      port;

    function doRequest(options) {
      console.log('pass', password);
      options.auth = {
        'user': username,
        'pass': password
      };
      return request(options);
  };

  function getProject(project) {
    console.log(project);
    var options = {
      uri: host + ('/rest/api/2/project/' + project),
      method: 'GET'
    };
    return doRequest(options);
  };

    return {
      init: function (options) {
        console.log(options);
        password = options.password || '';
        username = options.username || '';
        host = options.host || '';
        port = options.port || '';
      },

      getProject: getProject

    };
})();

module.exports = JiraApi;