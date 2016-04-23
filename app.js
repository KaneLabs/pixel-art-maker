window.onload = function(){

  var body = document.querySelector('body');
  body.style.margin = '0';
  body.style.padding = '0';
  var main = document.getElementById('container');
  main.style.width = '100%';


  //gets number of pixels needed to fill screen
  var num;
  function getNumOfPixelsToFillScreen(){
    var winArea = window.innerHeight * window.innerWidth;
    var paletArea = window.innerWidth * 30;
    var pixelFullScreen = winArea - paletArea;
    console.log(winArea);
    console.log(pixelFullScreen);
    var numPixels = Math.floor(pixelFullScreen / 100);
    num = numPixels;
  }

  getNumOfPixelsToFillScreen();
//function that makes the color palet
  function makePalet(){
    var colorPalet = document.createElement('div');
    colorPalet.style.position = 'fixed';
    colorPalet.style.bottom = '0';
    colorPalet.style.left = '0';
    colorPalet.style.width = '100%';
    colorPalet.style.height = '40px';
    colorPalet.style.background = 'silver';
    colorPalet.style.bottom = '0';
    main.appendChild(colorPalet);

//Make color swatch to represent current color
    var currentColor = document.createElement('div');
    currentColor.style.width = '30px';
    currentColor.style.height = '30px';
    currentColor.style.display = "inline-block"
    currentColor.style.background = 'grey';

//Manually make color swatches..
//Possibly easierer with constructor function or loop?
    var color1 = document.createElement('div');
    color1.style.width = '10px';
    color1.style.display = "inline-block"
    color1.style.height = '10px';
    color1.style.background = 'red';
    color1.addEventListener('click', function(){
    paintbucket.color = "red";
    currentColor.style.background = "red";
    });

    var color2 = document.createElement('div');
    color2.style.width = '10px';
    color2.style.display = "inline-block"
    color2.style.height = '10px';
    color2.style.background = 'blue';
    color2.addEventListener('click', function(){
    paintbucket.color = "blue";
    currentColor.style.background = "blue";
    });

    var color3 = document.createElement('div');
    color3.style.width = '10px';
    color3.style.display = "inline-block"
    color3.style.height = '10px';
    color3.style.background = 'green';
    color3.addEventListener('click', function(){
    paintbucket.color = "green";
    currentColor.style.background = "green";
    });

    var color4 = document.createElement('div');
    color4.style.width = '10px';
    color4.style.display = "inline-block"
    color4.style.height = '10px';
    color4.style.background = 'yellow';
    color4.addEventListener('click', function(){
    paintbucket.color = "yellow";
    currentColor.style.background = "yellow";
    });

    var color5 = document.createElement('div');
    color5.style.width = '10px';
    color5.style.display = "inline-block"
    color5.style.height = '10px';
    color5.style.background = 'purple';
    color5.addEventListener('click', function(){
    paintbucket.color = "purple";
    currentColor.style.background = "purple";
    });

    var color6 = document.createElement('div');
    color6.style.width = '10px';
    color6.style.display = "inline-block"
    color6.style.height = '10px';
    color6.style.background = 'orange';
    color6.addEventListener('click', function(){
    paintbucket.color = "orange";
    currentColor.style.background = "orange";
    });

    var color7 = document.createElement('div');
    color7.style.width = '10px';
    color7.style.display = "inline-block"
    color7.style.height = '10px';
    color7.style.background = 'black';
    color7.addEventListener('click', function(){
    paintbucket.color = "black";
    currentColor.style.background = "black";
    });

    var color8 = document.createElement('div');
    color8.style.width = '10px';
    color8.style.display = "inline-block"
    color8.style.height = '10px';
    color8.style.background = 'white';
    color8.addEventListener('click', function(){
    paintbucket.color = "white";
    currentColor.style.background = "white";
    });

    var color9 = document.createElement('div');
    color9.style.width = '10px';
    color9.style.display = "inline-block"
    color9.style.height = '10px';
    color9.style.background = 'grey';
    color9.addEventListener('click', function(){
    paintbucket.color = "grey";
    currentColor.style.background = "grey";
    });

    colorPalet.appendChild(currentColor);
    colorPalet.appendChild(color1);
    colorPalet.appendChild(color2);
    colorPalet.appendChild(color3);
    colorPalet.appendChild(color4);
    colorPalet.appendChild(color5);
    colorPalet.appendChild(color6);
    colorPalet.appendChild(color7);
    colorPalet.appendChild(color8);
    colorPalet.appendChild(color9);

  };

//Use paintbucket obj as holder for dynamic color injection
var paintbucket = {
  color: 'grey'
}

function makePixels(){
  var pixelArray = [];
  for(var i = 0; i <= num; i++){
    var pixel = document.createElement('div');
    pixel.style.boxSizing = "border-box";
    pixel.style.position = "relative";
    pixel.style.float = "left"
    pixel.style.width = "10px";
    pixel.style.height = "10px";
    pixel.style.margin = "0";
    pixel.style.padding = "0";
    pixel.style.display = "inline-block";
    pixel.style.background = "white";
    pixel.style.border = "1px solid grey";
    main.appendChild(pixel);
    pixelArray.push(pixel);
    pixel.addEventListener('click', function (){
      this.style.background = paintbucket.color;
      this.style.border = "1px solid " + paintbucket.color;
    });
  }
};

makePixels();
makePalet();
}
