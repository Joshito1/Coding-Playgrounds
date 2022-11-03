function bg_on() {
  document.body.style.backgroundColor = "initial";
}

function bg_off() {
  document.body.style.backgroundColor = "black";
}

function lightbulb_on() {
  document.getElementById("myimage").src = "images/pic_bulbon.gif";
}

function lightbulb_off() {
  document.getElementById("myimage").src = "images/pic_bulboff.gif";
}

function big_size() {
  document.getElementById("px").style.fontSize = "35px";
}

function normal_size() {
  document.getElementById("px").style.fontSize = "initial";
}

function hide_Elem() {
  document.getElementById("hide/show").style.display = "none";
}

function show_Elem() {
  document.getElementById("hide/show").style.display = "block";
}

function show_hidden_Elem() {
  document.getElementById("hidden_txt").style.display = "block";
}
