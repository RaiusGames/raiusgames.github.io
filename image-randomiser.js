const images =
[
    'url("images/mona-web.jpg")',
    'url("images/amber-web.jpg")',
    'url("images/commission_images/val.jpg")',
    'url("images/commission_images/chope 2.jpg")',
    'url("images/ambush.jpg")',
    'url("images/commission_images/sol-lake.jpg")',
    'url("images/witch.jpg")',
    'url("images/rain.jpg")',
    'url("images/witch2.jpg")',
    'url("images/late-night.jpg")',
    'url("images/games/3d-test1.jpg")',
    'url("images/games/3d-test2.jpg")',
    'url("images/games/strange-shores2.jpg")',
];
//const bg = document.getElementById("background").style.backgroundImage;
var currIndex = 0;

function showImage()
{
    //var a = Math.floor(Math.random() * pics.length); 
    currIndex++;
    if(currIndex >= images.length)
    {
        currIndex = 0;
    }
    var currImage = images[currIndex];
    //pic.style.backgroundImage = img;
    var bg = document.getElementById("background").style.backgroundImage = currImage;
} 

setInterval(showImage, 3500);
