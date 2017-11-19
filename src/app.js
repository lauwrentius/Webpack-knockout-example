var ko = require("knockout");
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

require('./index.html');
require('./scss/style.scss');

var ViewModel = function(hello, world) {
    this.hello = ko.observable(hello);
    this.world = ko.observable(world);

    this.fullText = ko.pureComputed(function() {
        return this.hello() + " " + this.world();
    }, this);
};

ko.applyBindings(new ViewModel("Hello", "World!"));
// This makes Knockout get to work
