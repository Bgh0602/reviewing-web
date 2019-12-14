function print(s) {
  document.write(s);
}

//5팩을 하면 120이 나와야한다!

var t = +prompt("number in right now !")
var a = 1;
var result = 1;

while ( a < t ) {
  result = result * (a + 1);
  a++;
}

print(result)
