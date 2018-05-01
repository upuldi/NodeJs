var GreeterExported = require('./6_module_exports_constructor_method_greeter');

var g = new GreeterExported('en');
g.greetPerson();
