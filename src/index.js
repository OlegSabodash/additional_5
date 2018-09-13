module.exports = function check(str, bracketsConfig) {

  var arr = [];
  var a;
  var b;
  var countOne = 1;
  var countTwo = 1;
  var countThree = 1;
  for (let i = 0; i < str.length; i++) {
    var oneElement = str[i];


    for (let y = 0; y < bracketsConfig.length; y++) {
      var arrOne = bracketsConfig[y];

      for (let u = 0; u < bracketsConfig[y].length; u++) {
        var q = bracketsConfig[y][u];
        if (q == '|' && oneElement == '|') {
          countOne++;
        }
        if (q == '7' && oneElement == '7') {
          countTwo++;
        }
        if (q == '8' && oneElement == '8') {
          countThree++;
        }
        if (oneElement == bracketsConfig[y][u] && countOne % 2 == 0) {
          arr.push(-1);
        }
        if (oneElement == bracketsConfig[y][u] && countTwo % 2 == 0) {
          arr.push(-2);
        }
        if (oneElement == bracketsConfig[y][u] && countThree % 2 == 0) {
          arr.push(-3);
        }

        if (oneElement == bracketsConfig[y][u] && oneElement != '|' && oneElement != '7' && oneElement != '8') {
          arr.push(String(y) + String(u));
        }

      }

    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1 && arr[i] == arr[i + 1]) {
      arr.splice(i, 2);
      i = 0;
      if(arr.length == 0){return true }
    }

    if (arr[i] == -2 && arr[i] == arr[i + 1]) {
      arr.splice(i, 2);
      i = 0;
      if(arr.length == 0){return true }
    }

    if (arr[i] == -3 && arr[i] == arr[i + 1]) {
      arr.splice(i, 2);
      i = 0;
      if(arr.length == 0){return true }
    }
    a = arr[i];
    b = arr[i + 1];
    if (a[0] == b[0] && +a[1] + 1 == +b[1]) {
      arr.splice(i, 2);
      i = -1;
      if (!arr.length) {
        return true;
      }
    }
    if (a != b && arr.length - 1 == i + 1) {
      return false;
    }

    if (a[0] != b[0] && arr.length - 1 == i + 1) {
      return false;
    }
    if (arr.length == 1) { return false };
    if (a[0] = b[0] && +a[1] + 1 !== +b[1] && arr.length - 1 == i + 1) { return false };
  }
}
