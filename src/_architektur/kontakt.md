---
layout: page
title: Kontakt
path: /kontakt/
weight: 100
collection: architektur
headline: Kontaktieren Sie uns jederzeit wenn Sie Fragen haben und wir vereinbaren einen unverbindlichen Beratungstermin
---

<div class="content_box">
  <div>
    <div>
      <h1> Architektur- und Sachverständigenbüro Löw </h1>

      <p>Ferdinand-Dirichs-Str. 15a<br>
        65549 Limburg a. d. Lahn <br><br>
        Fon 06431 / 93 54 - 0 <br>
        Fax 06431 / 93 54 - 20 <br>
        <a href="mailto:loew@architekt-loew.de">loew@architekt-loew.de</a>
        <br><br>
      </p>
      <div style="height:100%; width: 100%;">
        <div id="map_canvas"></div>
      </div>
    </div>
  </div>

  <br class="clear">
</div>
<script>
var marker;
function initGmaps() {
  console.log('callback!');
  var latlng = new google.maps.LatLng(50.388661,8.054262);
  var myOptions = {
    zoom: 16,
    mapTypeId: 'roadmap',
    center: latlng
  };
  var myMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  marker = new google.maps.Marker({
      position: latlng,
      map: myMap,
      animation: google.maps.Animation.DROP,
      title: "Archtekturbuero Loew"
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBL6BaHjkZHbKkkY2AClFnY7kdxl8NV8FY&callback=initGmaps"
    async defer></script>