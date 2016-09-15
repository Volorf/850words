$(document).ready ->

  $("body").on "mousedown", ->
    $(@).css("background": "white")

  $("body").on "mouseup", ->
    $(@).css("background": "#FF8A8A")
