!function(e){var n={};function o(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)o.d(r,t,function(n){return e[n]}.bind(null,t));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n){PlayScissors=function(){var e=["Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors"][Math.floor(30*Math.random())];document.getElementById("computerSelect").innerHTML=e,document.getElementById("playerChoise").innerHTML="Scissors";var n=document.getElementById("computerSelect").innerHTML;"Paper"==n?document.getElementById("winner").innerHTML="Congrats! You win.":"Rock"==n?document.getElementById("winner").innerHTML="Too bad! Computer wins.":"Scissors"==n&&(document.getElementById("winner").innerHTML="No winners! It's a tie."),Emoji()},PlayRock=function(){var e=["Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors"][Math.floor(30*Math.random())];document.getElementById("computerSelect").innerHTML=e,document.getElementById("playerChoise").innerHTML="Rock";var n=document.getElementById("computerSelect").innerHTML;"Paper"==n?document.getElementById("winner").innerHTML="Too bad! Computer wins.":"Rock"==n?document.getElementById("winner").innerHTML="No winners! It's a tie.":"Scissors"==n&&(document.getElementById("winner").innerHTML="Congrats! You win."),Emoji()},PlayPaper=function(){var e=["Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors"][Math.floor(30*Math.random())];document.getElementById("computerSelect").innerHTML=e,document.getElementById("playerChoise").innerHTML="Paper";var n=document.getElementById("computerSelect").innerHTML;"Paper"==n?document.getElementById("winner").innerHTML="No winners! It's a tie.":"Rock"==n?document.getElementById("winner").innerHTML="Congrats! You win.":"Scissors"==n&&(document.getElementById("winner").innerHTML="Too bad! Computer wins."),Emoji()},Emoji=function(){var e=document.getElementById("winner").innerHTML;"No winners! It's a tie."==e?(document.getElementById("tie").style.display="block",document.getElementById("playerWins").style.display="none",document.getElementById("playerLooses").style.display="none"):"Congrats! You win."==e?(document.getElementById("playerWins").style.display="block",document.getElementById("tie").style.display="none",document.getElementById("playerLooses").style.display="none"):"Too bad! Computer wins."==e&&(document.getElementById("playerLooses").style.display="block",document.getElementById("tie").style.display="none",document.getElementById("playerWins").style.display="none")}}]);