angular.module('directivePractice')
  .service('lessonService', function(){

    var lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

    this.getLessons = function(){
      return lessons;
    };

    this.getSchedule = function(){
      return $http.get('schedule.json');
    };


  });
