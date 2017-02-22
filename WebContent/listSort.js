var app = angular.module("listSort", []);

app.controller('listSortCtrl', function($scope) {
	$scope.users = [];
//	$scope.submit = function() {
//		if ($scope.userName) {
//			$scope.users.push(this.userName);
//			$scope.userName = '';
//		}
//	};
      
	$scope.sortUsers = function() {
		console.log($scope.users);
		$scope.users.sort();
	}
	
	$scope.addUser = function() {
		if ($scope.userName) {
			$scope.users.push(this.userName);
			$scope.userName = '';
		}
	};
});
