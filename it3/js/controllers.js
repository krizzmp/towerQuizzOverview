angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  // Main app controller, empty for the example
        $scope.$on('button.tab', function() {
            // Might recycle content here
            console.log("test");
            alert("test");
        });

})

// A simple controller that fetches a list of data
.controller('StudentsTabCtrl', function($scope, Students) {
    // "Students" is a service returning mock data (services.js)
    $scope.students = Students.all();

    $scope.$on('tab.shown', function() {
    // Might do a load here
    });
    $scope.$on('tab.hidden', function() {
    // Might recycle content here
    });
    $scope.$on('button.tab', function() {
        // Might recycle content here
        console.log("test");
        alert("test");
    });
    $scope.sortBy = ["ca/qa"];
    $scope.rightButtons = [
        {
            text: 'Print',
            type: 'button-positive button-clear'
        }
    ];
})

// A simple controller that shows a tapped item's data
.controller('StudentCtrl', function($scope, $routeParams, Students) {
  // "Students" is a service returning mock data (services.js)
  $scope.student = Students.get($routeParams.studentId);
  $scope.sortBy = 'id';

})
.controller('QuestionCtrl', function($scope, $routeParams, Questions) {
    // "Students" is a service returning mock data (services.js)
    $scope.question = Questions.get($routeParams.questionId);
    $scope.sortBy = 'id';
})
.controller('CategoryCtrl', function($scope, $routeParams, Categories) {
    // "Students" is a service returning mock data (services.js)
    $scope.category = Categories.get($routeParams.categoryId);
    $scope.sortBy = 'id';
})

// A simple controller that fetches a list of data
.controller('QuestionsTabCtrl', function($scope, Questions) {
    // "Students" is a service returning mock data (services.js)
    $scope.questions = Questions.all();

    $scope.$on('tab.shown', function() {
        // Might do a load here
    });
    $scope.$on('tab.hidden', function() {
        // Might recycle content here
    });
    $scope.sortBy = ["ca/qa"];
        $scope.rightButtons = [
            {
                text: 'Print',
                type: 'button-positive button-clear'
            }
        ];
})
// A simple controller that fetches a list of data
.controller('CategoriesTabCtrl', function($scope, Categories) {
    // "Students" is a service returning mock data (services.js)
    $scope.categories = Categories.all();

    $scope.$on('tab.shown', function() {
        // Might do a load here
    });
    $scope.$on('tab.hidden', function() {
        // Might recycle content here
    });
    $scope.sortBy = ["ca/qa"];
        $scope.rightButtons = [
            {
                text: 'Print',
                type: 'button-positive button-clear'
            }
        ];
});
