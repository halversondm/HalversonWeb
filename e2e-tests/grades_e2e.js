'use strict';

describe('Grade Book Page Tests', function () {

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

  beforeEach(function () {
    browser.get('#/grades');
  });

  it('deletes a student', function() {

    var studentWithB = defaultStudentList[1];

    element(by.id('studentNumber')).sendKeys(studentWithB.num);
    element(by.id('quiz1')).sendKeys(studentWithB.quiz1);
    element(by.id('quiz2')).sendKeys(studentWithB.quiz2);
    element(by.id('midterm')).sendKeys(studentWithB.mid);
    element(by.id('final')).sendKeys(studentWithB.final);
    element(by.id('addStudent')).click();

    element(by.css('button[ng-click="removeStudent($index)"]')).click();

    expect(element(by.css('tbody > tr')).isPresent()).toBe(false);
  });

  it('shows an A student', function() {

    var studentWithA = defaultStudentList[0];

    element(by.id('studentNumber')).sendKeys(studentWithA.num);
    element(by.id('quiz1')).sendKeys(studentWithA.quiz1);
    element(by.id('quiz2')).sendKeys(studentWithA.quiz2);
    element(by.id('midterm')).sendKeys(studentWithA.mid);
    element(by.id('final')).sendKeys(studentWithA.final);
    element(by.id('addStudent')).click();

    expect(element(by.binding('student.studentNumber')).getText()).toEqual(studentWithA.num.toString());
    expect(element(by.binding('student.quiz1')).getText()).toEqual(studentWithA.quiz1.toString());
    expect(element(by.binding('student.quiz2')).getText()).toEqual(studentWithA.quiz2.toString());
    expect(element(by.binding('student.midterm')).getText()).toEqual(studentWithA.mid.toString());
    expect(element(by.binding('student.final')).getText()).toEqual(studentWithA.final.toString());
    expect(element(by.binding('student.classAverage')).getText()).toEqual('91');
    expect(element(by.binding('student.letterGrade')).getText()).toEqual('A');
  });

  it('shows a B student', function() {

    var studentWithB = defaultStudentList[1];

    element(by.id('studentNumber')).sendKeys(studentWithB.num);
    element(by.id('quiz1')).sendKeys(studentWithB.quiz1);
    element(by.id('quiz2')).sendKeys(studentWithB.quiz2);
    element(by.id('midterm')).sendKeys(studentWithB.mid);
    element(by.id('final')).sendKeys(studentWithB.final);
    element(by.id('addStudent')).click();

    expect(element(by.binding('student.studentNumber')).getText()).toEqual(studentWithB.num.toString());
    expect(element(by.binding('student.quiz1')).getText()).toEqual(studentWithB.quiz1.toString());
    expect(element(by.binding('student.quiz2')).getText()).toEqual(studentWithB.quiz2.toString());
    expect(element(by.binding('student.midterm')).getText()).toEqual(studentWithB.mid.toString());
    expect(element(by.binding('student.final')).getText()).toEqual(studentWithB.final.toString());
    expect(element(by.binding('student.classAverage')).getText()).toEqual('84');
    expect(element(by.binding('student.letterGrade')).getText()).toEqual('B');
  });

  it('shows a C student', function() {

    var studentWithC = defaultStudentList[2];

    element(by.id('studentNumber')).sendKeys(studentWithC.num);
    element(by.id('quiz1')).sendKeys(studentWithC.quiz1);
    element(by.id('quiz2')).sendKeys(studentWithC.quiz2);
    element(by.id('midterm')).sendKeys(studentWithC.mid);
    element(by.id('final')).sendKeys(studentWithC.final);
    element(by.id('addStudent')).click();

    expect(element(by.binding('student.studentNumber')).getText()).toEqual(studentWithC.num.toString());
    expect(element(by.binding('student.quiz1')).getText()).toEqual(studentWithC.quiz1.toString());
    expect(element(by.binding('student.quiz2')).getText()).toEqual(studentWithC.quiz2.toString());
    expect(element(by.binding('student.midterm')).getText()).toEqual(studentWithC.mid.toString());
    expect(element(by.binding('student.final')).getText()).toEqual(studentWithC.final.toString());
    expect(element(by.binding('student.classAverage')).getText()).toEqual('76');
    expect(element(by.binding('student.letterGrade')).getText()).toEqual('C');
  });


  it('shows a D student', function() {

    var studentWithD = defaultStudentList[3];

    element(by.id('studentNumber')).sendKeys(studentWithD.num);
    element(by.id('quiz1')).sendKeys(studentWithD.quiz1);
    element(by.id('quiz2')).sendKeys(studentWithD.quiz2);
    element(by.id('midterm')).sendKeys(studentWithD.mid);
    element(by.id('final')).sendKeys(studentWithD.final);
    element(by.id('addStudent')).click();

    expect(element(by.binding('student.studentNumber')).getText()).toEqual(studentWithD.num.toString());
    expect(element(by.binding('student.quiz1')).getText()).toEqual(studentWithD.quiz1.toString());
    expect(element(by.binding('student.quiz2')).getText()).toEqual(studentWithD.quiz2.toString());
    expect(element(by.binding('student.midterm')).getText()).toEqual(studentWithD.mid.toString());
    expect(element(by.binding('student.final')).getText()).toEqual(studentWithD.final.toString());
    expect(element(by.binding('student.classAverage')).getText()).toEqual('64');
    expect(element(by.binding('student.letterGrade')).getText()).toEqual('D');
  });


  it('shows a F student', function() {

    var studentWithF = defaultStudentList[4];

    element(by.id('studentNumber')).sendKeys(studentWithF.num);
    element(by.id('quiz1')).sendKeys(studentWithF.quiz1);
    element(by.id('quiz2')).sendKeys(studentWithF.quiz2);
    element(by.id('midterm')).sendKeys(studentWithF.mid);
    element(by.id('final')).sendKeys(studentWithF.final);
    element(by.id('addStudent')).click();

    expect(element(by.binding('student.studentNumber')).getText()).toEqual(studentWithF.num.toString());
    expect(element(by.binding('student.quiz1')).getText()).toEqual(studentWithF.quiz1.toString());
    expect(element(by.binding('student.quiz2')).getText()).toEqual(studentWithF.quiz2.toString());
    expect(element(by.binding('student.midterm')).getText()).toEqual(studentWithF.mid.toString());
    expect(element(by.binding('student.final')).getText()).toEqual(studentWithF.final.toString());
    expect(element(by.binding('student.classAverage')).getText()).toEqual('33');
    expect(element(by.binding('student.letterGrade')).getText()).toEqual('F');
  });

});
