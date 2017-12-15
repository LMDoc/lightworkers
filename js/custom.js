$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '206185429',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '206185429.1677ed0.592a7b090d3d4ae0b5abaeb77c58814e',
        sortBy: 'most-recent',
        template: '<a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}"</a>',
    });


    userFeed.run();

    });

// 1390960460
// 