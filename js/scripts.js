var triangle = ["sideA", "sideB", "sideC"]
var triangle = function() {
  var sideA = parseInt(document.getElementById("sideA").value);
  var sideB = parseInt(document.getElementById("sideB").value);
  var sideC = parseInt(document.getElementById("sideC").value);

  if ((sideA + sideB) > sideC && (sideA + sideC) > sideB && (sideB + sideC) > sideA) {
    if (sideA === sideB && sideB === sideC && sideC === sideA) {
      alert("Equilateral triangle");
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
      alert("Isosceles Triangle");
    } else {
      alert("Scalene Triangle");
    }
  } else if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    alert("Put a Number")
  } else {
    alert("Cannot form a Triangle");
  }
}
