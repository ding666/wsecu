// the main (app) module
var app = angular.module("wsecu", []);
app.factory('getInfo', function($http) {
	
});

function isNumeric(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
}

var tmpO= {};
  tmpO["a"] = "hello";
  for (var i in tmpO) {
	  console.log("key=" + i);
  }

console.log(tmpO);
//var blocks = [5,-2, 4, 'Z', 'X', 9, '+', '+'], n=8;;
//var last1, last2;
//var total=0;
//for(i=0;i < n; i++) {
//	switch(blocks[i]) {
//	case 'Z':
//		if (i>=1 && isNumeric(blocks[i-1]) ) {
//			total -= blocks[i-1];
//		}
//		break;
//	case 'X':
//		if (i >=2 && isNumeric(blocks[i-1]) ) {
//			total += 2*blocks[i-1];
//		}
//		break;
//	case '+':
//		if (i >=2 && isNumeric(blocks[i-1]) && isNumeric(blocks[i-2]) )  {
//			total += blocks[i-1] + blocks[i-2];
//		}
//		break;
//	default:
//		total += blocks[i];
//	}
//	
//}
//console.log("total=" + total);

app.controller('myCtrl', function($scope, $http, $filter) {
  $scope.search = {};
  $scope.search.term = "";
  document.getElementById("searchSummary").style.display = 'none';

  var mq = window.matchMedia("(max-width: 600px)");

  if (mq.matches) {
    $scope.smallScreen = true;
    document.getElementById("listTitle").style.display = 'none';
  } else {
    $scope.smallScreen = false;
    document.getElementById("listTitle").style.display = 'block';
  }

  mq.addListener(function(changed) {
    if (changed.matches) {
      $scope.smallScreen = true;
      document.getElementById("listTitle").style.display = 'none';
    } else {
      $scope.smallScreen = false;
      document.getElementById("listTitle").style.display = 'block';
    }
  });


  $http.get("http://jsonplaceholder.typicode.com/users").success(function(response) {
    $scope.users = response;
  });
  $scope.searchTermChanged = function() {
    console.log("changed");
    $scope.nFound = $filter('searchFor')($scope.users, $scope.term).length;
    if ($scope.term.length == 0)
      document.getElementById("searchSummary").style.display = 'none';
    else
      document.getElementById("searchSummary").style.display = 'block';
  }
  $scope.nFound = function() {
    return $filter('searchFor')($scope.users, term).length;
  }
});

app.filter('searchFor', function() {
  return function(arr, term) {
    if (!term) {
      return arr;
    }
    var result = [];
    var term = term.toLowerCase();
    angular.forEach(arr, function(item) {
      if (item.name.toLowerCase().indexOf(term) !== -1 || item.email.toLowerCase().indexOf(term) !== -1) {
        result.push(item);
      }
    });
    return result;
  };
});

