var bmi = function (weight, height){
var weight = weight*0.453592;
var height = height*0.0254;
var height = height*height;
 alert(weight / height);
};

var height = parseInt(prompt("How tall are you in inches?"));
var weight = parseInt(prompt("How much do you weigh in lbs?"));

bmi(weight, height).toFixed(2);
