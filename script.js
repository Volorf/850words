$(document).ready(function(){

  // Main variables
  var url = "enru.json";

  // Get random number
  function getRandomNumber(range) {
    var randomNumber = Math.round(Math.random() * range)
    return randomNumber
  }

  // Set data function
  function setData(transcription, word, translation) {
    $(".transcription").text(transcription);
    $(".word").text(word);
    $(".translation").text(translation);
  };

  // Get json data and set to labels
  function getAndSetData(url) {
    $.getJSON(url, function(result) {
      // Count our JSON
      var count = Object.keys(result).length;
      // Define indexOfArray from getRandomNumber funtion
      var indexOfArray = getRandomNumber(count)
      // Set data for labels
      setData(result[indexOfArray].transcription, result[indexOfArray].word, result[indexOfArray].translation)
    });
  };

  // Call getAndSetData function
  getAndSetData(url);

  function showLabels() {
    $(".word").css({"opacity": "1", "transform" : "scale(1)"});
    $(".translation").css({"opacity": ".4", "transform" : "scale(1)"});
    $(".transcription").css({"opacity": ".4", "transform" : "scale(1)"});
  };

  showLabels();

});
