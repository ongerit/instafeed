$(document).ready(function() {
    
   if( $('#insta-wrap').length == 1){

    $('#list-2').one("click", function() {

            //Instafeed.js code to run after document loads
            var loadButton = document.getElementById('load-more'); //grabs load-more
            var feed = new Instafeed({
                get: 'user',
                userId: 2105340433,
                //clientId: '28d08067f8c643188a26d52f1c8af8ed', //omit to use later
                accessToken: '2105340433.467ede5.54c303b775a4408fb89393b131c928eb',
                limit: 16,
                links: false,
                template: '<div class="instaPhoto"><a  href="#" data-uk-modal="{target:&#39;#modal-{{id}}&#39;}"><img class="main-image" src="{{image}}" /> <div id="modal-{{id}}" class="uk-modal"><div class="uk-modal-dialog"><h1><img class="profile-image" src="/wp-content/themes/collegefashionista/images/heart-lrg.png"/> <a class="profile-link" target="_blank" href="http://www.instagram.com/{{caption}}">{{caption}}</a></h1><div class="caption-body"><img src="{{image}}"/></div> <!--<div class="uk-modal-caption">{{caption}}</div>--></div></div></a></div>',

                resolution: 'standard_resolution',
                
                //This filter determines whether images has zero likes if it does then the images belong to #stylegurulove tab
                filter: function(image) {
                    if (image.likes.count == 0) {
                        return true;
                    }
                    return false;
                },

                after: function() {
                    //disable button if no more results to load
                    if (!this.hasNext()) {
                        loadButton.style.display = 'none';
                    }
                },

            });

            //bind the load more button

            loadButton.addEventListener('click', function() {
                feed.next();
            });

            feed.run();
    });

    var loadButtonPartner = document.getElementById('load-more-2'); //grabs load-more-2 for Sponsor Tab




    var foundImages = 0;
    var maxImages = 12;
    var feed = new Instafeed({
        //var modalCode = "{target:&#39;#modal-"+photoId+"&#39;}";  //omit to use later
        target: 'instafeed2',
        get: 'user',
        userId: 2105340433,
        //clientId: '28d08067f8c643188a26d52f1c8af8ed', //omit to use later
        accessToken: '2105340433.467ede5.54c303b775a4408fb89393b131c928eb',
        limit: 10,
        links: false,
        template: '<div class="instaPhoto"><a  href="#" data-uk-modal="{target:&#39;#modal-{{id}}&#39;}"><img class="main-image" src="{{image}}" /> <div id="modal-{{id}}" class="uk-modal"><div class="uk-modal-dialog"><h1><img class="profile-image" src="/wp-content/themes/collegefashionista/images/heart-lrg.png"/> <a class="profile-link" target="_blank" href="http://www.instagram.com/{{caption}}">{{caption}}</a></h1><div class="caption-body"><img src="{{image}}"/></div> <!--<div class="uk-modal-caption">{{caption}}</div>--></div></div></a></div>',

        resolution: 'standard_resolution',

        success: function() {
            foundImages = 0;
        },

        filter: function(image) {
            if (image.likes.count >= 1 && foundImages < maxImages) {
                foundImages = foundImages + 1;
                return true;
            }
            return false;
        },
        //This filter determines whether images has more zero likes if it does then the images belong to #aeojeans tab
        after: function() {
            //disable button if no more results to load
            if (!this.hasNext()) {
                loadButtonPartner.style.display = 'none';
            }
        },


    });
    //bind the load more button
    loadButtonPartner.addEventListener('click', function() {
        feed.next();
    });
    feed.run();
   }
});