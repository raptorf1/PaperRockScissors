!function(e){var r={};function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,r,n){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)o.d(n,t,function(r){return e[r]}.bind(null,t));return n},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s=0)}([function(e,r){PlayScissors=function(){var e=["Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors"][Math.floor(30*Math.random())];document.getElementById("computerSelect").innerHTML=e;var r=document.getElementById("computerSelect").innerHTML;"Paper"==r?document.getElementById("winner").innerHTML="Congrats! You win.":"Rock"==r?document.getElementById("winner").innerHTML="Too bad! Computer wins.":"Scissors"==r&&(document.getElementById("winner").innerHTML="No winners! It's a tie.")},PlayRock=function(){var e=["Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors"][Math.floor(30*Math.random())];document.getElementById("computerSelect").innerHTML=e;var r=document.getElementById("computerSelect").innerHTML;"Paper"==r?document.getElementById("winner").innerHTML="Too bad! Computer wins.":"Rock"==r?document.getElementById("winner").innerHTML="No winners! It's a tie.":"Scissors"==r&&(document.getElementById("winner").innerHTML="Congrats! You win.")},PlayPaper=function(){var e=["Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors"][Math.floor(30*Math.random())];document.getElementById("computerSelect").innerHTML=e;var r=document.getElementById("computerSelect").innerHTML;"Paper"==r?document.getElementById("winner").innerHTML="No winners! It's a tie.":"Rock"==r?document.getElementById("winner").innerHTML="Congrats! You win.":"Scissors"==r&&(document.getElementById("winner").innerHTML="Too bad! Computer wins.")}}]);