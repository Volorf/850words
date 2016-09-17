$(document).ready(function(){

  // Main variables
  var random = 0
  var url = "enru.json";

  // Set data function
  function setData(transcription, word, translation) {
    $(".transcription").text(transcription);
    $(".word").text(word);
    $(".translation").text(translation);
  };

  // Get json data and set to labels
  function getAndSetData(url) {
    $.getJSON(url, function(result) {
      setData(result[random].transcription, result[random].word, result[random].translation)
    });
  };

  // Call getAndSetData function
  getAndSetData(url);

});
