function init(){
  var button = document.getElementById('entrybutton');
  
  function showMeText(){
    var text = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = text.value;
    alert("Jorge Navarro: " + text.value);
  }

  button.addEventListener('click', showMeText);
  }
  
window.addEventListener('load', init);