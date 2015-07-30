$(document).ready(function() {

  //Instafeed.js code to run after document loads
  var loadButton = document.getElementById('load-more'); //grabs load-more
  
  var feed = new Instafeed({
    //var modalCode = "{target:&#39;#modal-"+photoId+"&#39;}";  //omit to use later
    get: 'user',
    userId: 2105340433,
    //clientId: '28d08067f8c643188a26d52f1c8af8ed', //omit to use later
    accessToken: '2105340433.467ede5.54c303b775a4408fb89393b131c928eb',
    limit: 10,
    links: false,
    template: '<div class="instaPhoto"><a  href="#" data-uk-modal="{target:&#39;#modal-{{id}}&#39;}"><img class="main-image" src="{{image}}" /> <div id="modal-{{id}}" class="uk-modal"><div class="uk-modal-dialog"><h1><img class="profile-image" src="{{model.user.profile_picture}}"/> <a class="profile-link" target="_blank" href="http://www.instagram.com/{{caption}}">{{caption}}</a></h1><div class="caption-body"><img src="{{image}}"/></div> <!--<div class="uk-modal-caption">{{caption}}</div>--></div></div></a></div>',

    resolution: 'standard_resolution',
    
    
    after: function(){
      //disable button if no more results to load
      if (!this.hasNext()){
        loadButton.setAttribute('disabled','disabled');
      }
    },
    
    
  });
  
  //bind the load more button
  
  loadButton.addEventListener('click', function(){
    feed.next();
  })

  feed.run();
  
  $('#list-2').one("click",function(){
      var feed = new Instafeed({
    //var modalCode = "{target:&#39;#modal-"+photoId+"&#39;}";  //omit to use later
    target : 'instafeed2',
    get: 'user',
    userId: 2105340433,
    //clientId: '28d08067f8c643188a26d52f1c8af8ed', //omit to use later
    accessToken: '2105340433.467ede5.54c303b775a4408fb89393b131c928eb',
    limit: 30,
    links: false,
    template: '<div class="instaPhoto"><a  href="#" data-uk-modal="{target:&#39;#modal-{{id}}&#39;}"><img class="main-image" src="{{image}}" /> <div id="modal-{{id}}" class="uk-modal"><div class="uk-modal-dialog"><h1><img class="profile-image" src="{{model.user.profile_picture}}"/> <a class="profile-link" target="_blank" href="http://www.instagram.com/{{caption}}">{{caption}}</a></h1><div class="caption-body"><img src="{{image}}"/></div> <!--<div class="uk-modal-caption">{{caption}}</div>--></div></div></a></div>',

    resolution: 'standard_resolution',
    
    
    after: function(){
      //disable button if no more results to load
      if (!this.hasNext()){
        loadButton.setAttribute('disabled','disabled');
      }
    },
    
    
  });
  
  //bind the load more button
  
  loadButton.addEventListener('click', function(){
    feed.next();
  })

  feed.run();

  })


});
