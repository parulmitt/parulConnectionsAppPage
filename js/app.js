App = Ember.Application.create();

// Routers
App.Router.map(function() {
  this.resource('connections', { path: '/connections'} , function() {
    
  });

 
  this.resource('connection', { path: '/connections/:connection_id' }, function() {
    this.route('edit');
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('connections');
  }
});

App.ConnectionsRoute = Ember.Route.extend({
  model: function() {
    return App.Connection.find();
  }
});

App.ConnectionIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('connection');
  },

  setupController: function(controller, model) {
    
    controller.set('content', model);
  }
});

App.ConnectionEditRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('connection');
  },

  setupController: function(controller, model) {
    controller.set('content', model);
  },

  activate: function() {
  },

  deactivate: function() {
    
  },

  events: {
    saveConnection: function() {
      this.transitionTo('connection', this.get('currentModel'));
    },

    cancelConnection: function() {
      this.transitionTo('connection', this.get('currentModel'));
    }
  }
});

// Controllers
App.ConnectionsController = Ember.ArrayController.extend({
  sortProperties: ['lastName']
});


// Views
App.ConnectionFormView = Ember.View.extend({
  templateName: 'connection/form',
  tagName: 'form',

  didInsertElement: function() {
    this.$('input:first').focus();
  },

  submit: function() {
    this.get('controller').send('saveConnection');
    return false;
  }
});

// Models
App.Store = DS.Store.extend({
  revision: 11
});

App.Connection = DS.Model.extend({
  firstName:  DS.attr('string'),
  lastName:   DS.attr('string'),
  title:      DS.attr('string'),
  email:      DS.attr('string')
});
