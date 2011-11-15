
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', function(req, res){
  res.render('pages/index', {
    page: {
      title: 'Mainspring UI'
    }
  });
});

app.get('/fluid', function(req, res){
  res.render('pages/fluid', {
    page: {
      title: 'Fluid Page | Mainspring UI',
      section: 'fluid'
    },
    cssSrc: ['/css/framework/fluid.css']
  });
});

app.get('/admin/user', function(req, res){
  res.render('pages/admin/user/list', {
    page: {
      title: 'CMS List Page | Mainspring UI',
      section: 'user'
    },
    cssSrc: ['/css/framework/cms-specific.css']
  });
});
app.get('/admin/user/add', function(req, res){
  res.render('pages/admin/user/form', {
    page: {
      title: 'CMS Add Page | Mainspring UI',
      section: 'user'
    },
    cssSrc: ['/css/framework/cms-specific.css']
  });
});
app.get('/admin/user/:id', function(req, res){
  res.render('pages/admin/user/view', {
    page: {
      title: 'CMS View Page | Mainspring UI',
      section: 'user'
    },
    cssSrc: ['/css/framework/cms-specific.css']
  });
});
app.get('/admin/user/:id/edit', function(req, res){
  res.render('pages/admin/user/form', {
    page: {
      title: 'CMS Edit Page | Mainspring UI',
      section: 'user'
    },
    cssSrc: ['/css/framework/cms-specific.css']
  });
});


app.listen(3111);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
