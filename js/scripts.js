var triangle = ["sideA", "sideB", "sideC"]
var triangle = function () {
  var sideA = parseInt(document.getElementById("sideA").value);
  var sideB = parseInt(document.getElementById("sideB").value);
  var sideC = parseInt(document.getElementById("sideC").value);

  if (sideA === sideB && sideB === sideC && sideC === sideA) {
      alert("Equilateral triangle");
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
      alert("Isosceles Triangle");
  } else if ((sideA+sideB) <=sideC ||(sideB+sideC)<=sideA || (sideA+sideC)<=sideB) {
      alert("Not a Triangle");
  } else {
    alert("Scalene Triangle");
  }
}
