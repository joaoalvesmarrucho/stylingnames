function person (name, postcode, age, height, weight, birthday) {
  this.name = name;
  this.postcode = postcode;
  this.age = age;
  this.height = height;
  this.weight = weight;
  this.birthday = birthday;
}

function pickproperty() {
  var someone = new person ("Joao", "E58ns", 56, 5.10, 12, "310381");
  var typeface = ["Helvetica", "Georgia", "Times", "Arial", "Futura", "Courier", "Verdana"];
//pick typeface based on name length
  var picktypeface = someone.name.length - 1;
  var chooseTypeFace = typeface[picktypeface];

//pick fontsize based on height and weight
  var fontsize = someone.height * someone.weight;

//pick fontcolour based on age, height and weight
  var fontColour = someone.age*100 * someone.height * someone.weight;
  console.log("#" + fontColour);

  var typeOnScreen = document.getElementById("name")
  //define background colour based on birthday
  document.body.style.backgroundColor = "#" + someone.birthday;
  //apply all the other text attributes
  typeOnScreen.innerHTML = someone.name;
  typeOnScreen.style.fontSize = fontsize + "px" ;
  typeOnScreen.style.fontFamily = chooseTypeFace;
  typeOnScreen.style.color = "#" + fontColour;
}
window.onload = pickproperty();
