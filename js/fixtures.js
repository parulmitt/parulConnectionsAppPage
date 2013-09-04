App.Store.reopen({
  adapter: 'DS.FixtureAdapter'
});

App.Connection.FIXTURES = [{
  
  id: 1,
  firstName: 'Adams',
  lastName: 'Samuel',
  title: 'Manager, Dominos Pizza',
  email: 'sam_adams@yahoo.com'

}, {
  id: 2,
  firstName: 'Rogers',
  lastName: 'Ric',
  title: 'Server, The Old Spaghetti Factory',
  email: 'rrogers@aol.com'

  
}, {
  
  id: 3, 
  firstName: 'Gene',
  lastName: 'Ng',
  title: 'Cashier, Subway',
  email: 'ng.gene@gmail.com'
  
}];

   

