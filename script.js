var rndnum1 = Math.floor(Math.random() * 6) + 1;
var rdmimg1 = "dice" + rndnum1 + ".png";
var rndmsrc1 = "images/" + rdmimg1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", rndmsrc1);


var rndnum2 = Math.floor(Math.random() * 6) + 1;
var rdmimg2 = "dice" + rndnum2 + ".png";
var rndmsrc2 = "images/" + rdmimg2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", rndmsrc2);

if(rndnum1 > rndnum2)
{
    document.querySelector("h1").innerHTML = " Player1 wins 😛"
}

else if (rndnum1 < rndnum2 )
{
    document.querySelector("h1").innerHTML = "Player 2 wins 👻"
}
else
{
    document.querySelector("h1").innerHTML = "OOPs Match Draw 😅"
}