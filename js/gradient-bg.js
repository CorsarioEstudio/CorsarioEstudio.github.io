function changeBackground(element) {
  //change color every frame
  //initialise colors ( hue, lightness)
  var hue = 360;
  var light = 0;

  function changeHue (){
    var col1 = Math.abs((hue % 720) - 360);
    var col2 = Math.abs( ( (hue+90) % 720) - 360);
    hue++ ;

    //values for light adjustment not used
    var light1 = Math.abs( (light % 40) - 20)+60;
    var light2 = Math.abs( ( (light+10) % 40) - 20)+60;
    light++ ;

    element.style.background = 'linear-gradient(hsl('+col1 +',70%, 75%) 0%,hsl('+col2 +',90%,75%) 100%)';
  }
  setInterval	(changeHue, 64);
}