var myApp = angular.module("myApp", ['ngRoute']);


myApp.config(function($routeProvider) {
     $routeProvider

         // route for the home page
         .when('/', {
             templateUrl : 'views/home.html',
             controller  : 'mainController'
         })

         // route for the about page
         .when('/newWiki', {
             templateUrl : 'views/newWiki.html',
             controller  : 'newWikiController'
         })
 });

 // create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope, $http) {
     // create a message to display in our view
    $scope.playerName = "Michael Jordan";
    // debugger;


    $scope.message = 'Everyone come and see how good I look!';
     // place holder for mongo data
    $scope.articles = [
       {title: 'post 1', author: 5},
       {title: 'post 2', author: 2},
       {title: 'post 3', author: 15},
       {title: 'post 4', author: 9},
       {title: 'post 5', author: 4}
    ];
});

myApp.controller('newWikiController', function($scope, $http) {
    $scope.message = 'Creating new wiki.';
     // $scope.playerTitle
    $scope.sumbitNew = function(){ 
        // alert("yo");
        var formData = {
         	title : $scope.playerTitle,
        	content: $scope.playerContent
        };

        $http.post("/api/createWiki", formData)
        .success(function(data, status, headers, config) {
        	console.log("data", data);
        	console.log("status", status);

          }).
          error(function(data, status, headers, config) {
          	console.log("data", data);
        	console.log("status", status);

          });
    }

});


    // app.controller("controller", function($scope) {
//     $scope.playerName = "Michael Jordan";

// })