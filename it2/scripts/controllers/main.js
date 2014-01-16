'use strict';

angular.module('TeacherOverviewApp')
  .controller('MainCtrl', function ($scope) {
    $scope.data = {
        students:[{
            name:"Alex Jones",
            questionsAnswered:9,
            rightAnswers:5,
            helpRecieved:2,
            helpGiven:1
        },{
            name:"Brian Brushwood",
            questionsAnswered:8,
            rightAnswers:4,
            helpRecieved:3,
            helpGiven:2
        },{
            name:"Alexia Mccahn",
            questionsAnswered:7,
            rightAnswers:5,
            helpRecieved:2,
            helpGiven:1
        },{
            name:"Eddy Cue",
            questionsAnswered:9,
            rightAnswers:4,
            helpRecieved:3,
            helpGiven:2
        },{
            name:"Tommy Lee Jones",
            questionsAnswered:8,
            rightAnswers:3,
            helpRecieved:2,
            helpGiven:1
        },{
            name:"Jon Snow",
            questionsAnswered:8,
            rightAnswers:5,
            helpRecieved:3,
            helpGiven:2
        },{
            name:"Brandon Stark",
            questionsAnswered:8,
            rightAnswers:6,
            helpRecieved:2,
            helpGiven:1
        },{
            name:"Loras Tyrell",
            questionsAnswered:7,
            rightAnswers:4,
            helpRecieved:3,
            helpGiven:2
        },{
            name:"Jamie Lanister",
            questionsAnswered:6,
            rightAnswers:5,
            helpRecieved:2,
            helpGiven:1
        },{
            name:"Justin Robert Young",
            questionsAnswered:9,
            rightAnswers:7,
            helpRecieved:3,
            helpGiven:2
        },{
            name:"Leo Lapporte",
            questionsAnswered:7,
            rightAnswers:5,
            helpRecieved:2,
            helpGiven:1
        },{
            name:"Steve Jobs",
            questionsAnswered:9,
            rightAnswers:5,
            helpRecieved:3,
            helpGiven:2
        },{
            name:"Jonathan Ive",
            questionsAnswered:10,
            rightAnswers:9,
            helpRecieved:1,
            helpGiven:2
        }],
        questions:[]
    };
        $scope.sorting = 'name'
  });
