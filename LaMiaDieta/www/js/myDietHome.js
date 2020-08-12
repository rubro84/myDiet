$(document).ready(function() {
  var containerDietaToday = $(".containerDietaToday");
  var now = new Date();
  var today = getNameDay(now.getDay());
  $(".nameOfTheDay").html(today);
  var result = getDay(today.toLowerCase());
  console.log(result);
  var start = $("<ul class='dietInHome'></ul>").appendTo(containerDietaToday);
  Object.keys(result).map(function(itemObj) {
    var item = result[itemObj];
    $("<li>" + itemObj + ": " + item + "</li>").appendTo(start);
  });
});
