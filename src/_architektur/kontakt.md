---
layout: page
title: Kontakt
path: /kontakt/
weight: 100
collection: architektur
---

<div class="content_box">
  <div style="width: 450px;height: 520px;border-right: 1px dashed #8F8F8F; float: left;">

    <h4>Kontaktieren Sie uns wenn Sie Fragen haben und wir vereinbaren einen unverbindlichen Beratungstermin.</h4>
    <div id="mailform_div">
      <form onsubmit="return validate_form(this)" class="kontakt_form" action="index.php?id=13" method="POST">
        <input type="text" name="name"><label for="name">* name</label>
        <input id="email" type="text" name="email">
          <label for="email">* email</label>
        <input type="text" id="phone" name="phone">
          <label for="phone">telefon</label><textarea class="message_text" name="message"></textarea><label for="message">* nachricht</label>
        <input type="submit" name="submit" value="nachricht senden"></form>
    </div>

    <br class="clear">
  </div>
  <div style="width: 299px; float: left;">
    <div style="padding-left:10px;">
      <h4> Architektur- und Sachverständigenbüro Löw </h4>

      <p>Ferdinand-Dirichs-Str. 15a<br>
        65549 Limburg a. d. Lahn <br><br>
        Fon 06431 / 93 54 - 0 <br>
        Fax 06431 / 93 54 - 20 <br>
        <a href="mailto:loew@architekt-loew.de">loew@architekt-loew.de</a>
        <br><br>
      </p>
      <div id="map_canvas"></div>
    </div>
  </div>

  <br class="clear">
</div>