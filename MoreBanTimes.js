// ==UserScript==
// @name        MoreBanTimes
// @namespace   MoreBan
// @include     http://aretegaming.com/mcp.php?i=ban*
// @version     2
// @grant       GM_addStyle
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require     http://code.jquery.com/ui/1.11.4/jquery-ui.js
// @downloadURL https://raw.githubusercontent.com/Cakery/MorebanTimes/master/MoreBanTimes.js
// ==/UserScript==
$("head").append (
    '<link '
  + 'href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css" '
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
