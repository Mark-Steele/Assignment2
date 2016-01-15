angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
	$scope.showMe = false;
	$scope.sortOption = 'code';
	$scope.confirmed='112';
	//$scope.title = 'Book name';
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
		$scope.listings.push({'code':$scope.code, 'name':$scope.name,
			'coordinates':$scope.coordinates, 'address':$scope.address});
		$scope.code = '';
		$scope.name = '';
		$scope.coordinates = '';
		$scope.address = '';
		$scope.confirmed='1';
	};
    $scope.deleteListing = function(listing) {
		for(var i =0;i<$scope.listings.length;i++){
			if($scope.listings[i] === listing){
				$scope.listings.splice(i, 1);	
			}
		}		
	};
    $scope.showDetails = function(listing) {
		if($scope.details === listing){
			$scope.showMe = !$scope.showMe;
			$scope.details = listing;
			
		}
		else{
			$scope.showMe = true;
			$scope.details = listing;
		}
	}
  }
]);

/*
    $scope.addListing = function() {
		$scope.listings.push({ 'code':$scope.code, 'name':$scope.name});
		$scope.code = '';
		$scope.name = '';
		$scope.address='';
		
		
		if($scope.indexD == index){
			$scope.showMe = !$scope.showMe;
			
		}
		else{
			$scope.showMe= true;
		}
	};
*/