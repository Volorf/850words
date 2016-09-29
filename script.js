$(document).ready(function(){

  // Main variables
  var url = "enru.json";

  // Get random number
  function getRandomNumber(range) {
    var randomNumber = Math.round(Math.random() * range)
    return randomNumber
  }

  // Set data function
  function setData(transcription, word, translation, type) {
    $(".transcription").text(transcription);
    $(".word").text(word);
    $(".translation").text(translation);
    $(".type").text(type);
  };

  // Show all labels
  function showLabels() {
    $(".word").css({"opacity": "1", "transform" : "scale(1)"});
    $(".translation").css({"opacity": ".4", "transform" : "scale(1)"});
    $(".transcription").css({"opacity": ".4", "transform" : "scale(1)"});
    $(".type").css({"opacity": ".2", "transform" : "scale(1)"});
    $(".created").css({"opacity": ".2", "transform" : "scale(1)"});
    $(".info").css({"opacity": ".2", "transform" : "scale(1)"});
    $(".app").css({"opacity": ".2", "transform" : "scale(1)"})
  };

  // Get json data and set to labels
  function getAndSetData(url) {
    $.getJSON(url, function(result) {
      // Count our JSON
      var count = Object.keys(result).length;
      // Define indexOfArray from getRandomNumber funtion
      var indexOfArray = getRandomNumber(count)
      // Set data for labels
      setData(result[indexOfArray].transcription, result[indexOfArray].word, result[indexOfArray].translation, result[indexOfArray].type)
    });
    // Show our labels
    showLabels();
  };

  // Call getAndSetData function
  getAndSetData(url);

  // Call getAndSetData function by click
  $(".container").click(function() {
    // Call getAndSetData function
    getAndSetData(url);
  });

  // Call getAndSetData function by pressing any button
  $(document).keydown(function(e){
    // Backspace check
    if (event.keyCode == 32) {
      // Call getAndSetData function
      getAndSetData(url);
    };
  });

});
