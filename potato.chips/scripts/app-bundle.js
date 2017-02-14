define('app',['exports', 'gateway/personGateway'], function (exports, _personGateway) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.message = 'Hello World!';
      this.persons = [];
      this.getPersons();
    }

    App.prototype.getPersons = function getPersons() {
      var _this = this;

      debugger;
      _personGateway.PersonGateway.personList.then(function (data) {
        _this.persons = data;
      });
      console.log(this.persons);
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('gateway/personGateway',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.PersonGateway = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var PersonGateway = exports.PersonGateway = function () {
        function PersonGateway() {
            _classCallCheck(this, PersonGateway);

            this.personList = [];
        }

        PersonGateway.prototype.getPersonList = function getPersonList() {
            return _aureliaFetchClient.HttpClient.fetch('http://localhost:5000/api/Values').then(function (response) {
                personList = responst.json();
            });
        };

        return PersonGateway;
    }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n  <ul repeat.for=\"person of persons\")>\n      <ul>${person}</ul>\n  </ul> \n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map