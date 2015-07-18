var appModule = angular.module('friendsList');

appModule.controller('mainCtrl', function($scope) {
	$scope.friends = ['John', 'Jacob', 'Jingle-Heimer', 'Schmidt'];
	var friends2 = ['John', 'Allie'];
});
