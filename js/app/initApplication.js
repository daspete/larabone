if (typeof console === 'undefined' || typeof console.log === 'undefined') {
    console = {
        log: function(o){},
        dir: function(o){}
    };
}

log = function(o){ console.log(o); };
dir = function(o){ console.dir(o); };

var DASPETE=DASPETE || {};

require.config({

    urlArgs: 'cache='+(new Date()).getTime(),

    baseUrl: '../js/app',

    paths: {
        jquery: '../../vendor/jquery/dist/jquery',
        jqueryCookie: '../../vendor/jquery-cookie/jquery.cookie',
        
        TweenMax: '../../vendor/gsap/src/uncompressed/TweenMax',
        TweenLite: '../../vendor/gsap/src/uncompressed/TweenLite',
        TimelineMax: '../../vendor/gsap/src/uncompressed/TimelineMax',
        greensockScrollTo: '../../vendor/gsap/src/uncompressed/plugins/ScrollToPlugin',
        greensockDraggable: '../../vendor/gsap/src/uncompressed/utils/Draggable',
        greensockThrow: '../../vendor/gsap/src/minified/plugins/ThrowPropsPlugin.min',
        greensockKinetic: '../../vendor/gsap/src/uncompressed/plugins/KineticPlugin',
        
        underscore: '../../vendor/underscore/underscore',
        backbone: '../../vendor/backbone/backbone',
        
        hammer: '../../vendor/hammerjs/hammer'
    },

    shim: {
        jquery: {
            exports: '$'
        },
        jqueryCookie: {
            deps: ['jquery']
        },

        TweenMax: {
            exports: 'TweenMax',
            deps: ['greensockScrollTo']
        },
        TweenLite: {
            exports: 'TweenLite',
            deps: ['greensockScrollTo']
        },
        TimelineMax: {
            exports: 'TimelineMax'
        },
        greensockDraggable: {
            exports: 'Draggable',
            deps: ['TweenMax', 'TweenLite', 'greensockKinetic', 'greensockThrow']
        },

        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: [
                'underscore', 
                'jquery'
            ]
        },

        hammer: {
            exports: 'Hammer'
        }
    },

    deps: [
        'bootApplication'
    ]
});