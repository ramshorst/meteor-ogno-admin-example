// Cars Collection
Cars = new Meteor.Collection('cars');

Cars.allow({
    'insert' : function () { return true; },
    'update' : function () { return true; },
    'remove' : function () { return true; }
});

// Test Collection
TestCollection = new Meteor.Collection2('test', {
    schema : {
        'name' : {
            type : String
        }
    }
});

TestCollection.allow({
    'insert' : function () { return true; },
    'update' : function () { return true; },
    'remove' : function () { return true; }
});

// Router Configuration
Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'rootTemplate'
    });
});

// Ogno Admin Configuration
OgnoAdmin.config({
    'prefix' : '/admin',
    'auto' : true,
    'homeScreenTemplate' : 'test'
});

Meteor.users.allow({
    'insert' : function () { return true; },
    'update' : function () { return true; },
    'remove' : function () { return true; }
});

// Ogno Admin extend structure
OgnoAdmin.structure([
    {
        'weight' : 3,
        'type' : 'custom',
        'use' : 'customTemplate',
        'icon' : 'pencil',
        'menu-title' : 'Custom Menu Item'
    },
    {
        'type' : 'collection',
        'icon' : 'user',
        'use' : {
            'collection' : Meteor.users,
            'schema' : {
                'emails' : {
                    type: [Object]
                }
            }
        },
        'menu-title' : 'Users'
    }
]);
