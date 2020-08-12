$(document).ready(function() {
  function getQueryStringValue(key) {
    return decodeURIComponent(
      window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")
    );
  }

  window.getNameDay = function(day) {
    switch (parseInt(day)) {
      case 0:
        return "Domenica";
      case 1:
        return "Lunedì";
      case 2:
        return "Martedì";
      case 3:
        return "Mercoledì";
      case 4:
        return "Giovedì";
      case 5:
        return "Venerdì";
      case 6:
        return "Sabato";
    }
  };

  var nameOfDay = getNameDay(getQueryStringValue("day"));

  $(".nameOfDay").html(nameOfDay);

  $(".addDietForDay").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    var colazione = $(".colazione").val();
    var spuntinoMattina = $(".spuntinoMattina").val();
    var pranzo = $(".pranzo").val();
    var spuntinoPomeriggio = $(".spuntinoPomeriggio").val();
    var cena = $(".cena").val();
    addDay(nameOfDay, colazione, spuntinoMattina, pranzo, spuntinoPomeriggio, cena);
    window.location.href = "index.html";
  });
});
