var myDietStructure = localStorage.getItem("myApp.myDieta");
if (!myDietStructure) {
  myDietStructure = {};
  myDietStructure["lunedì"] = { colazione: "", spuntinoMattina: "", pranzo: "", spuntinoPomeriggio: "", cena: "" };
  myDietStructure["martedì"] = { colazione: "", spuntinoMattina: "", pranzo: "", spuntinoPomeriggio: "", cena: "" };
  myDietStructure["mercoledì"] = { colazione: "", spuntinoMattina: "", pranzo: "", spuntinoPomeriggio: "", cena: "" };
  myDietStructure["giovedì"] = { colazione: "", spuntinoMattina: "", pranzo: "", spuntinoPomeriggio: "", cena: "" };
  myDietStructure["venerdì"] = { colazione: "", spuntinoMattina: "", pranzo: "", spuntinoPomeriggio: "", cena: "" };
  myDietStructure["sabato"] = { colazione: "", spuntinoMattina: "", pranzo: "", spuntinoPomeriggio: "", cena: "" };
  myDietStructure["domenica"] = { colazione: "", spuntinoMattina: "", pranzo: "", spuntinoPomeriggio: "", cena: "" };
  localStorage.setItem("myApp.myDieta", JSON.stringify(myDietStructure));
}

var getDay = function(day) {
  return JSON.parse(myDietStructure)[day];
};

var addDay = function(day, colazione, spuntinoMattina, pranzo, spuntinoPomeriggio, cena) {
  myDietStructure = JSON.parse(localStorage.getItem("myApp.myDieta"));
  myDietStructure[day.toLowerCase()]["colazione"] = colazione;
  myDietStructure[day.toLowerCase()]["spuntinoMattina"] = spuntinoMattina;
  myDietStructure[day.toLowerCase()]["pranzo"] = pranzo;
  myDietStructure[day.toLowerCase()]["spuntinoPomeriggio"] = spuntinoPomeriggio;
  myDietStructure[day.toLowerCase()]["cena"] = cena;
  localStorage.setItem("myApp.myDieta", JSON.stringify(myDietStructure));
};
