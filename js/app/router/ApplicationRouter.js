define([
    'backbone'
], function(
    Backbone
){

    var ApplicationRouter=Backbone.Router.extend({

        routes: {
            '': 'index'
        },

        application_view: null,

        initialize: function(options){
            this.application_view=options.view;
        },

        index: function(){
            
        }
        
    });

    return ApplicationRouter;

});