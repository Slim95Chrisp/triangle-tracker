var triangle = function () {
  var sideA = parseFloat(document.getElementById("sideA").value);
  var sideB = parseFloat(document.getElementById("sideB").value);
  var sideC = parseFloat(document.getElementById("sideC").value);

  if (sideA === sideB && sideB === sideC && sideC === sideA) {
    alert("Equilateral triangle");
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    alert("Isosceles Triangle");
  } else if (sideA !=== sideB && sideB !=== sideC) {
    alert("Scalene Triangle");
  } else
    alert("Not a Triangle");
  }
}
