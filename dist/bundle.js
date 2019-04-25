!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){var t=["Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors"],o=document.getElementById("winner"),r=document.getElementById("computerSelect"),s=document.getElementById("playerChoise"),i=document.getElementById("scorePlayer"),a=document.getElementById("scoreComputer");function c(e){return"computerPaper"==e}function l(e){return"computerRock"==e}function u(e){return"computerScissors"==e}function d(e){return"playerPaper"==e}function m(e){return"playerRock"==e}function p(e){return"playerScissors"==e}PlayScissors=function(){var e=t[Math.floor(30*Math.random())];r.innerHTML=e,s.innerHTML="Scissors",window.sessionStorage.setItem(performance.now(),"playerScissors"),"Paper"==r.innerHTML?(o.innerHTML="Congrats! You win.",window.sessionStorage.setItem(performance.now()+1,"computerPaper")):"Rock"==r.innerHTML?(o.innerHTML="Too bad! Computer wins.",window.sessionStorage.setItem(performance.now()+1,"computerRock")):"Scissors"==r.innerHTML&&(o.innerHTML="No winners! It's a tie.",window.sessionStorage.setItem(performance.now()+1,"computerScissors")),Emoji()},PlayRock=function(){var e=t[Math.floor(30*Math.random())],n=document.getElementById("computerSelect");n.innerHTML=e,s.innerHTML="Rock",window.sessionStorage.setItem(performance.now(),"playerRock"),"Paper"==n.innerHTML?(o.innerHTML="Too bad! Computer wins.",window.sessionStorage.setItem(performance.now()+1,"computerPaper")):"Rock"==n.innerHTML?(o.innerHTML="No winners! It's a tie.",window.sessionStorage.setItem(performance.now()+1,"computerRock")):"Scissors"==n.innerHTML&&(o.innerHTML="Congrats! You win.",window.sessionStorage.setItem(performance.now()+1,"computerScissors")),Emoji()},PlayPaper=function(){var e=t[Math.floor(30*Math.random())],n=document.getElementById("computerSelect");n.innerHTML=e,s.innerHTML="Paper",window.sessionStorage.setItem(performance.now(),"playerPaper"),"Paper"==n.innerHTML?(o.innerHTML="No winners! It's a tie.",window.sessionStorage.setItem(performance.now()+1,"computerPaper")):"Rock"==n.innerHTML?(o.innerHTML="Congrats! You win.",window.sessionStorage.setItem(performance.now()+1,"computerRock")):"Scissors"==n.innerHTML&&(o.innerHTML="Too bad! Computer wins.",window.sessionStorage.setItem(performance.now()+1,"computerScissors")),Emoji()},Emoji=function(){"No winners! It's a tie."==o.innerHTML?(document.getElementById("tie").style.display="block",document.getElementById("playerWins").style.display="none",document.getElementById("playerLooses").style.display="none",window.sessionStorage.setItem(Date.now(),"t")):"Congrats! You win."==o.innerHTML?(document.getElementById("playerWins").style.display="block",document.getElementById("tie").style.display="none",document.getElementById("playerLooses").style.display="none",window.sessionStorage.setItem(Date.now(),"p")):"Too bad! Computer wins."==o.innerHTML&&(document.getElementById("playerLooses").style.display="block",document.getElementById("tie").style.display="none",document.getElementById("playerWins").style.display="none",window.sessionStorage.setItem(Date.now(),"c")),CalculatePoints(),Thumbs()},CalculatePoints=function(){var e=Object.values(window.sessionStorage);i.innerHTML="Player ".concat(e.filter(CheckPlayerWins).length),a.innerHTML="Computer ".concat(e.filter(CheckComputerWins).length)},CheckComputerWins=function(e){return"c"==e},CheckPlayerWins=function(e){return"p"==e},CheckTie=function(e){return"t"==e},Thumbs=function(){var e=Number(a.innerHTML.replace(/^\D+/g,"")),n=Number(i.innerHTML.replace(/^\D+/g,""));e>n?(document.getElementById("thumbsDown").style.display="block",document.getElementById("thumbsUp").style.display="none",document.getElementById("thumbsMiddle").style.display="none"):e==n?(document.getElementById("thumbsDown").style.display="none",document.getElementById("thumbsUp").style.display="none",document.getElementById("thumbsMiddle").style.display="block"):(document.getElementById("thumbsDown").style.display="none",document.getElementById("thumbsUp").style.display="block",document.getElementById("thumbsMiddle").style.display="none")},Reset=function(){window.sessionStorage.clear(),window.location.reload(!0)},PrivacyMessage=function(){alert("Your privacy is of the utmost importance for us. All scores/stats data of the game, are only stored in the Session Storage of your browser and are deleted whenever you close the tab. No data is left on your device. If you want to keep track of your stats, you can download the detailed CSV file provided.")},ViewStats=function(){var e=Object.values(window.sessionStorage),n=e.length/3,t=e.filter(CheckPlayerWins).length,o=e.filter(CheckComputerWins).length,r=e.filter(CheckTie).length,s=(t/n*100).toFixed(2),i=(o/n*100).toFixed(2),a=(r/n*100).toFixed(2);0==n?alert("No games are played yet. Start playing and good luck!"):alert("You played ".concat(n," games. You won ").concat(t," games. Computer won ").concat(o," games. There were ").concat(r," ties. Your winning ratio is ").concat(s,"%. Computer's winning ratio is ").concat(i,"%. Ties occured ").concat(a,"%."))},CSV=function(){var e=Object.values(window.sessionStorage),n=e.length/3,t=e.filter(CheckPlayerWins).length,o=e.filter(CheckComputerWins).length,r=e.filter(CheckTie).length,s=e.filter(d).length,i=e.filter(m).length,a=e.filter(p).length,y=e.filter(c).length,w=e.filter(l).length,g=e.filter(u).length,f=new Blob([["GamesPlayed",n,"PlayerWins",t,"ComputerWins",o,"Ties",r,"PlayerPaper",s,"PlayerRock",i,"PlayerScissors",a,"ComputerPaper",y,"ComputerRock",w,"ComputerScissors",g]],{type:"text/csv"}),S=window.URL.createObjectURL(f);document.getElementById("download_link").href=S}}]);