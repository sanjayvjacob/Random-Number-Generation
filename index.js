prompt("What is your name?");
prompt("what is your lover's name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) +1;
console.log(loveScore);
if(loveScore > 70){
  alert("Your love score is " + loveScore + "%" + "You love each other like kanye loves kanye");
}
else{
  alert("Your love score is " + loveScore + "%");
}
