$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '3088391055',
        limit: 30,
        resolution: 'standard_resolution',
        accessToken: '3088391055.1677ed0.21d7eff385fd475981967ae9e534b913',
        sortBy: 'most-recent',
        template: '<a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}"</a>',
    });


    userFeed.run();

    });

// 1390960460
// 