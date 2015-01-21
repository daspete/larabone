define([
    'backbone',
    'TweenMax'
], function(
    Backbone,
    TweenMax
){
    function ModuleName(settings){

        var defaults={

        };

        var module_name={

            settings: {},

            DOM: {},

            init: function(settings, defaults){
                _.bindAll.apply(_, [this].concat(_.functions(this)));
                
                $.extend(this.settings, defaults, settings);

                this.setup();
            },

            setup: function(){
                $(window).on('resize', this.onResize);
            },

            onResize: function(){

            }

        };

        if(typeof settings === 'undefined'){
            settings=defaults;
        }

        module_name.init(settings, defaults);

        return module_name;
    }

    return ModuleName;
});