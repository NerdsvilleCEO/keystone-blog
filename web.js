var keystone = require('keystone');

keystone.init({
  'name': 'keystone-blog-demo-r66d',
  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],

  'views': 'templates/views',
  'view engine': 'jade',

  'auto update': true,
  'mongo': 'mongodb://localhost/keystone-blog-demo-r66d',

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'th1sisad3m0'
});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
