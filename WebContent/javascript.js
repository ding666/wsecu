// Bloomberg test

// sort, for key in  ...
var str = "bloomberg";

function compObj(a,b) {
  if (a.n != b.n) {
      return (b.n-a.n);
    }    else { 
        if (a.char < b.char)
            return -1;
        else if (a.char > b.char)
            return 1;
        else
            return 0;
    }
}

var charCount = {};
for (var i=0; i< str.length; i++) {
    var char = str.charAt(i);
    charCount[char]=charCount[char]?charCount[char]+1:1;
}

var objArray = [];

// loop hash array

for (var k in charCount) {
    var tmpO = {};
    tmpO["char"] = k;
    tmpO["n"]=charCount[k];
    objArray.push(tmpO);
    
}

objArray.sort(compObj);

var result = "";
for (var i=0; i<objArray.length; i++) {
    result += objArray[i].char;
}

console.log(objArray);
console.log("result=" + result);