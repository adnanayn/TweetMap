function show_map(){
      var twitName = document.getElementById("Input").value;

        /*Get Twitter Location Coordinates*/
var url = 'https://api.twitter.com/1/statuses/user_timeline/'+twitName+'.json?callback=?&count=100';
  $.getJSON(url,function(data){
        var mapOptions = {
                    zoom: 4,
                    center: new google.maps.LatLng(23.7, 90.3),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }//end of mapOtions 


      map = new google.maps.Map(document.getElementById("showMap"), mapOptions);
    for (var i = 0; i < data.length; i++) {
      var tweet = data[i].geo;
      if(tweet!=null){
         var getLat = data[i].geo.coordinates[0];
                 var getLng = data[i].geo.coordinates[1];

              var marker = new google.maps.Marker
              ({
              position:new google.maps.LatLng(data[i].geo.coordinates[0],data[i].geo.coordinates[1]) ,
                map: map,
              });

    };//end of if
  }//end of for loop data

  })//end function
}