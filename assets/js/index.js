function print(s) {
  document.write(s);
}

var n = +prompt("HOW MANY?");
var a = 1 ;
var b;
while (a < n+1) {
  b = 1;
  while (b < a+1) {
      print("*")
      b = b + 1;
  }
  print("<br>")
 a = a + 1;
}
