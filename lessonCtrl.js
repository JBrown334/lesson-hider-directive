angular.module('directivePractice')
  .controller('lessonCtrl', function($scope, lessonService){

    $scope.lessons = lessonService.getLessons();

    

  });
