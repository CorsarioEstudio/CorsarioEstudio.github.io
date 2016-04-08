GradientBG = function(elementArray, colorClass) {
  //change color every frame
  //initialise colors ( hue, lightness)
  var initialHue = 90;
  var initialLight = 0;
  var elements = [];

  if (sessionStorage.getItem("bg-hue"))
  {
    initialHue = parseInt(sessionStorage.getItem("bg-hue"));
  }

  for (var i = 0; i < elementArray.length; i++){
      elements.push({
        hue: initialHue,
        light: initialLight,
        obj: elementArray[i]
      });
      $(elementArray[i]).find(".corsario-overlay").addClass(colorClass);
  }

  this.getHue = function(){
    return initialHue;
  }

  function changeHue (){
    var col1, col2, light1, light2;
    for (var i = 0; i < elements.length; i++){

      col1 = Math.abs((elements[i].hue % 720) - 360);
      col2 = Math.abs( ( (elements[i].hue+90) % 720) - 360);
      elements[i].hue++;
      initialHue++;

      //values for light adjustment not used
      light1 = Math.abs( (elements[i].light % 40) - 20)+60;
      light2 = Math.abs( ( (elements[i].light+10) % 40) - 20)+60;
      elements[i].light++;
      initialLight++;

      elements[i].obj.style.background = 'linear-gradient(hsl('+col1 +',70%, 75%) 0%,hsl('+col2 +',90%,75%) 100%)';
    }
  }
  setInterval	(changeHue, 64);
}
