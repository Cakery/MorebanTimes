// ==UserScript==
// @name        MoreBanTimes
// @namespace   MoreBan
// @include     http://ADDYOURFORUMPAGEHERE/mcp.php?i=ban*
// @version     1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==
$(document).ready(function(){
  
      $("#banlength").prepend("<option value='5760'>4 Days</option>")
  $("#banlength").prepend("<option value='2880'>2 Days</option>")
$("#banlength").prepend("<option value='15'>15 Minutes</option>")
})
