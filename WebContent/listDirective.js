var app = angular.module("listDirective", []);

app.controller('listDirectiveCtrl', function($scope) {
	$scope.users = [];
//	$scope.submit = function() {
//		if ($scope.userName) {
//			$scope.users.push(this.userName);
//			$scope.userName = '';
//		}
//	};
      
	  $scope.people = [{
		    name: "Johna"
		  }, {
		    name: "Ted"
		  }];

});

app.directive('user', function() {

	  return {

	    restrict: 'AE',
	    // templateUrl: 'my-customer.html',
	    template: "<p>*name:{{user.name}}</p>",
	    scope: {
	      user: '='
	    },
	    link: function(scope, element, attr) {

	      console.log(scope.user);
	    }
	  };

	});
