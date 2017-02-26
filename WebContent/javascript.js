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

// ** map function, left rotation array n times
function rotationN(arr, n) {
    var rotationTime = n;
    var resultArr = arr.map(rotation);
    
 
    function rotation(val, idx, arr) {
        var j = (idx + n)%arr.length;
        return arr[j];
    
    }
    return resultArr;
    
}
var a = [1,2,3,4,5];
var b = rotationN(a, 4);
console.log(b);

// Two sum to check if the sum of any two numbers in an array/list matches a given number

var inputArray = [2,7,15,2,11];
var target = 26;
var hashArray = {};
var foundResult = false;

for (var i=0; i < inputArray.length; i++) {
    hashArray[inputArray[i]] = i;
    var diff = target - inputArray[i];
    var hasKey = hashArray.hasOwnProperty(diff);
    if (hasKey) {
        console.log("The sought indexes are " + hashArray[diff] + " and " + i);
        foundResult = true;
        break;
    }
}

if (! foundResult) 
    console.log("cannot find 2 sums");

// merge sort
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
 
function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;
 
    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
 
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}
 
console.log(mergeSort(a));

// From <http://www.stoimen.com/blog/2010/07/02/friday-algorithms-javascript-merge-sort/> 

// QuickSort
function showLog(str, obj) {
	console.log(str);
	if (obj !== undefined) {
		console.log (obj);
	}
}

var A = [3,7,8,5, 2, 1, 9, 5 ,4];

function quickSort (A, lo, hi) {
//	showLog("asdf 1, lo=", lo);
//	showLog("hi=", hi);
	if ( lo < hi) {
//		showLog("before partition lo=", lo);
//		showLog("hi=", hi);
		var p = partition (A, lo, hi);
		quickSort(A, lo, p-1);
		quickSort(A, p+1, hi);
	}
}

function partition (A, lo, hi) {
	showLog("\nlo=", lo);
	showLog("hi=", hi);
	showLog("Before partition A=", A);
	var pivot = A[hi];
	var i = lo;
	for (j = lo; j < hi ; j++) {
		if (A[j] <= pivot) {
			var tmp = A[i];
			A[i]= A[j];
			A[j] = tmp;
			i++;
		} 
	} 
	var tmp = A[i];
	A[i] = A[hi];
	A[hi]= tmp;
	showLog("After partition, A=", A);
	showLog("i=", i);
	return i;
}

//A=[2,3];
var lo = 0;
quickSort(A, lo, A.length-1);
showLog("result = ", A);

// heapSort
function iParent(i) {
	return Math.floor((i-1)/2);
}
function iLeftChild(i) {
	return 2*i;
}
function iRightChild(i) {
	return 2*i+1;
}

function heapify(a, count) {
	var start = iParent(count-1);
	while (start >= 0) {
		siftDown(a, start, count-1);
		start--;
	}
}

function siftDown(a, start, end) {
	var root = start;
	while (iLeftChild(root) <= end) {
		var child = iLeftChild(root);
		var swap = root;
		if (a[swap] < a[child]) {
			swap = child;
		}
		if (child+1 <= end && a[swap] < a[child+1]) {
			swap = child +1;
		}
		if (swap == root) {
			return;
		} else{
			var tmp=a[root];
			a[root] = a[swap];
			a[swap]=tmp;
			root = swap;
		}
	}
}

function heapSort(a, count) {
	var end = count - 1;
	while (end > 0) {
		console.log("before swap and shiftDown a=");
		console.log(a);
		var tmp=a[end];
		a[end] = a[0];
		a[0] = tmp;
		end--;
		siftDown(a, 0, end);
		console.log("end=" + end);
		console.log(a);
	}
}

var a=[6,5,3,1,8,7,2,4];
heapify(a,a.length);
heapSort(a, a.length);
console.log(a);

