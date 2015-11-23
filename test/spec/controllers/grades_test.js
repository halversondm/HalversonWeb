'use strict';

describe('Base64 Suite', function () {

  beforeEach(module('halversonWebApp'));

  var grades;
  var scope;
  var defaultStudentList = [{num: 1, quiz1: 7, quiz2: 10, mid: 90, final: 95}, {
    num: 2,
    quiz1: 9,
    quiz2: 8,
    mid: 90,
    final: 80
  }, {num: 3, quiz1: 7, quiz2: 8, mid: 70, final: 80}, {num: 4, quiz1: 5, quiz2: 8, mid: 50, final: 70}, {
    num: 5,
    quiz1: 4,
    quiz2: 0,
    mid: 40,
    final: 35
  }];

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    grades = $controller('gradesController', {
      $scope: scope
    });
  }));

  describe('grade tests', function() {

    it('should give an A', function() {
      expect(scope.studentList.length).toBe(0);
      scope.student.studentNumber = defaultStudentList[0].num;
      scope.student.quiz1 = defaultStudentList[0].quiz1;
      scope.student.quiz2 = defaultStudentList[0].quiz2;
      scope.student.midterm = defaultStudentList[0].mid;
      scope.student.final = defaultStudentList[0].final;
      scope.addStudent();
      expect(scope.studentList.length).toEqual(1);
      expect(scope.studentList[0].classAverage).toEqual(91);
      expect(scope.studentList[0].letterGrade).toEqual("A");
    });

    it('should give an B', function() {
      expect(scope.studentList.length).toBe(0);
      scope.student.studentNumber = defaultStudentList[1].num;
      scope.student.quiz1 = defaultStudentList[1].quiz1;
      scope.student.quiz2 = defaultStudentList[1].quiz2;
      scope.student.midterm = defaultStudentList[1].mid;
      scope.student.final = defaultStudentList[1].final;
      scope.addStudent();
      expect(scope.studentList.length).toEqual(1);
      expect(scope.studentList[0].classAverage).toEqual(84);
      expect(scope.studentList[0].letterGrade).toEqual("B");
    });

    it('should give a C', function() {
      expect(scope.studentList.length).toBe(0);
      scope.student.studentNumber = defaultStudentList[2].num;
      scope.student.quiz1 = defaultStudentList[2].quiz1;
      scope.student.quiz2 = defaultStudentList[2].quiz2;
      scope.student.midterm = defaultStudentList[2].mid;
      scope.student.final = defaultStudentList[2].final;
      scope.addStudent();
      expect(scope.studentList.length).toEqual(1);
      expect(scope.studentList[0].classAverage).toEqual(76);
      expect(scope.studentList[0].letterGrade).toEqual("C");
    });

    it('should give a D', function() {
      expect(scope.studentList.length).toBe(0);
      scope.student.studentNumber = defaultStudentList[3].num;
      scope.student.quiz1 = defaultStudentList[3].quiz1;
      scope.student.quiz2 = defaultStudentList[3].quiz2;
      scope.student.midterm = defaultStudentList[3].mid;
      scope.student.final = defaultStudentList[3].final;
      scope.addStudent();
      expect(scope.studentList.length).toEqual(1);
      expect(scope.studentList[0].classAverage).toEqual(64);
      expect(scope.studentList[0].letterGrade).toEqual("D");
    });

    it('should give a F', function() {
      expect(scope.studentList.length).toBe(0);
      scope.student.studentNumber = defaultStudentList[4].num;
      scope.student.quiz1 = defaultStudentList[4].quiz1;
      scope.student.quiz2 = defaultStudentList[4].quiz2;
      scope.student.midterm = defaultStudentList[4].mid;
      scope.student.final = defaultStudentList[4].final;
      scope.addStudent();
      expect(scope.studentList.length).toEqual(1);
      expect(scope.studentList[0].classAverage).toEqual(33);
      expect(scope.studentList[0].letterGrade).toEqual("F");
    });
  });

});
