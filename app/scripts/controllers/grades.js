'use strict';

angular.module('halversonWebApp').controller('gradesController', ['$scope', function ($scope) {

  $scope.studentList = [];

  $scope.student = {};

  $scope.addStudent = function () {
    var student = angular.copy($scope.student);
    var quizzes = ((student.quiz1 * 10) + (student.quiz2 * 10)) / 200;
    var midterm = student.midterm / 100;
    var final = student.final / 100;
    var finalGrade = ((quizzes * 0.25) + (midterm * 0.25) + (final * 0.5)) * 100;
    student.classAverage = Math.round(finalGrade);
    if (finalGrade >= 90) {
      student.letterGrade = "A";
    } else if (finalGrade >= 80 && finalGrade <= 89) {
      student.letterGrade = "B";
    } else if (finalGrade >= 70 && finalGrade <= 79) {
      student.letterGrade = "C";
    } else if (finalGrade >= 60 && finalGrade <= 69) {
      student.letterGrade = "D";
    } else {
      student.letterGrade = "F";
    }
    $scope.studentList.push(student);
    $scope.student = {};
  };

  $scope.removeStudent = function (index) {
    $scope.studentList.splice(index, 1);
  };

}]);
