var app = angular.module('attTest', []);

app.controller('myCtrl', function($scope, $http, $filter) {

$scope.users = [
	{
		"point":"new GLatLng(40.266044,-74.718479)", 
		"meetPoint":"Lawrence Library",
		"awayTeam":"LUGip",
		"markerImage":"images/red.png",
		"information": "Linux users group meets second Wednesday of each month.",
		"fixture":"Wednesday 7pm",
		"capacity":"",
		"previousScore":""
	},
	{
		"point":"new GLatLng(40.211600,-74.695702)",
		"meetPoint":"Hamilton Library",
		"awayTeam":"LUGip HW SIG",
		"markerImage":"images/white.png",
		"information": "Linux users can meet the first Tuesday of the month to work out harward and configuration issues.",
		"fixture":"Tuesday 7pm",
		"capacity":"",
		"tv":""
	},
	{
		"point":"new GLatLng(40.294535,-74.682012)",
		"meetPoint":"Applebees",
		"awayTeam":"After LUPip Mtg Spot",
		"markerImage":"images/newcastle.png",
		"information": "Some of us go there after the main LUGip meeting, drink brews, and talk.",
		"fixture":"Wednesday whenever",
		"capacity":"2 to 4 pints",
		"tv":""
	}
];
	console.log($scope.users);

	$scope.search = {};
	$scope.search.term="";
	document.getElementById("searchSummary").style.display = 'none';
	
	$scope.searchTermChanged = function() {
		console.log("changed");
		$scope.meetInfo = "";
		$scope.nFound = $filter('searchFor')($scope.users, $scope.term).length;
		if ($scope.nFound == 0) {
			document.getElementById("searchSummary").style.display = 'block';
			document.getElementById("selectList").style.display = 'none';
		} else {
			document.getElementById("searchSummary").style.display = 'none';
			document.getElementById("selectList").style.display = 'block';

		}



	}
	$scope.nFound = function() {
		return $filter('searchFor')($scope.users, term).length;
	};

	$scope.clickedItem = function(user, idx) {
		console.log("clicked "+idx);
		$scope.meetInfo = user.information;

//		for (var i=0; i<$scope.users.length; i++ ) {
//			console.log("i="+i + " idx="+idx);
//			if (i == idx ) {
//				document.getElementById("listID_"+idx).style.background = 'rgb(201,201,201)';
//				document.getElementById("listID_"+idx).style.color = 'red';
//				console.log(i + " grey");
//				console.log(document.getElementById("listID_"+idx).style.background);
//				console.log(document.getElementById("listID_"+idx).innerHTML);
//			} else {
//				document.getElementById("listID_"+idx).style.background = '#ffffff';
//				document.getElementById("listID_"+idx).style.color = 'yellow';
//				console.log(i + " white");
//			}
//			
//		// this.style.background = "yellow";
//			console.log("listID_"+idx);
//		}
		
//		for (var i=0; i<$scope.users.length; i++ ) {
//			console.log(i);
//			console.log(document.getElementById("listID_"+idx).style.background);
//		}
	}



});

app.filter('searchFor', function () {
    return function (arr, term) {
        if (!term) {
            return arr;
        }
        var result = [];
        var term = term.toLowerCase();
        angular.forEach(arr, function (item) {
        	if(item.meetPoint.toLowerCase().indexOf(term) !== -1 ) {
        		result.push(item);
        	}
        });
        return result;
    };
});


