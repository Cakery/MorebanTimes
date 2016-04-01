// ==UserScript==
// @name        MoreBanTimes
// @namespace   MoreBan
// @include     http://ADDYOURFORUMHERE/mcp.php?i=ban*
// @version     1
// @grant       GM_addStyle
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require     http://code.jquery.com/ui/1.11.4/jquery-ui.js
// ==/UserScript==
$("head").append (
    '<link '
  + 'href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/themes/le-frog/jquery-ui.min.css" '
  + 'rel="stylesheet" type="text/css">'
);
$(document).ready(function(){
  
      $("#banlength").prepend("<option value='5760'>4 Days</option>")
  $("#banlength").prepend("<option value='2880'>2 Days</option>")
$("#banlength").prepend("<option value='15'>15 Minutes</option>")

$("input[name='banlengthother']").datepicker({
				dateFormat: "yy-mm-dd",
})
})
