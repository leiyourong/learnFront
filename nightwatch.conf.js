const seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver')

const config = {
  'src_folders': ['test/e2e/specs'],
  'output_folder': 'test/e2e/reports',

  'selenium' : {
    'start_process' : true,
    'server_path': seleniumServer.path,
    'host': '127.0.0.1',
    'log_path' : '',
    'port' : 4444,
    'cli_args' : {
      'webdriver.chrome.driver' : chromedriver.path
    }
  },

  'test_settings' : {
    'default' : {
        'launch_url' : 'http://localhost',
        'selenium_port'  : 4444,
        'selenium_host'  : 'localhost',
        'silent': true,
        'globals': {
            'devServerURL': 'http://localhost:8080'
        },
        'desiredCapabilities': {
           'browserName': 'chrome',
           'javascriptEnabled': true,
           'acceptSslCerts': true
         }
    },

    'chrome' : {
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true
      }
    }
  }
}

module.exports = config
