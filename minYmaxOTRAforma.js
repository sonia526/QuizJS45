var n1 = 5, n2 = 2, n3 = 6;
var min, max;
if (n1 < n2){
  if (n1 < n3) {
    min = n1;
    max = n2 > n3? n2 : n3;
  }
  else {
    min = n3;
    max = n2 > n1? n2 : n1;
  }
}else {
  if (n2 < n3){
    min = n2;
    max = n1 > n3? n1 : n3;
  }
  else {
    min = n3;
    max = n2 > n1? n2 : n1;
  }
}

console.log (min);
console.log (max);
