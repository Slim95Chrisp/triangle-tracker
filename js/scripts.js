var triangle = function () {
  var sideA = parseInt("input#sideA");
  var sideA = parseInt("input#sideB");
  var sideA = parseInt("input#sideC");
  if (sideA === sideB && sideB === sideC && sideC === sideA) {
    alert("Equilateral triangle")
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    alert("Isosceles Triangle")
  } else if (sideA !=== sideB && sideB !=== sideC) {
    alert("Scalene Triangle")
  } else if ((sideA+sideB)<=sideC) || (sideB+sideC)<=sideA || (sideA+sideC)<=sideB){
    alert("Not a Triangle")
  }
}
