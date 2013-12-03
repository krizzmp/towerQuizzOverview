angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Students', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var students = [
    {
        id: 0,
        name: 'Abraham Lincoln',
        qa: 10,
        ca:8,
        ha:2,
        color:'energized',
        questions:[
            {
                id:0,
                q:"Is the sky blue",
                answer:"No",
                ca:"Yes",
                correct:false,
                ha:false
            },{
                id:1,
                q:"Is the sky blue2",
                answer:"No",
                ca:"Yes",
                correct:false,
                ha:false
            }
        ]
    },{
          id: 1,
          name: 'Abraham Lincoln',
          qa: 12,
          ca:9,
          ha:3,
          color:'assertive',
          questions:[
              {
                  id:4,
                  q:"Is the sky blue",
                  answer:"No",
                  ca:"Yes",
                  correct:false,
                  ha:false
              },{
                  id:1,
                  q:"Is the sky blue2",
                  answer:"No",
                  ca:"Yes",
                  correct:false,
                  ha:false
              }
          ]
      },{
          id: 2,
          name: 'Abraham Lincoln',
          qa: 9,
          ca:8,
          ha:3,
          color:'balanced',
          questions:[
              {
                  id:0,
                  q:"Is the sky blue",
                  answer:"No",
                  ca:"Yes",
                  correct:false,
                  ha:false
              },{
                  id:1,
                  q:"Is the sky blue2",
                  answer:"No",
                  ca:"Yes",
                  correct:false,
                  ha:false
              }
          ]
      }
  ];

  return {
    all: function() {
      return students;
    },
    get: function(studentId) {
      // Simple index lookup
      return students[studentId];
    }
  }
})
.factory('Questions', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var questions = [
        {
            id: 0,
            q: 'Is the sky blue?',
            qa: 10,
            ca:8,
            ha:2,
            students:[
                {
                    id:0,
                    name:"abraham",
                    qa:10,
                    ca:9,
                    ha:4
                },{
                    id:1,
                    name:"abraham",
                    qa:9,
                    ca:8,
                    ha:3
                }
            ]
        }
    ];

    return {
        all: function() {
            return questions;
        },
        get: function(studentId) {
            // Simple index lookup
            return questions[studentId];
        }
    }
})
    .factory('Categories', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var categories = [
            {
                id: 0,
                name: 'Fairytales',
                qa: 10,
                ca:8,
                ha:2,
                questions:[
                    {
                        id:0,
                        q:"abraham",
                        qa:10,
                        ca:9,
                        ha:4
                    },{
                        id:1,
                        q:"abraham",
                        qa:9,
                        ca:8,
                        ha:3
                    }
                ]
            }
        ];

        return {
            all: function() {
                return categories;
            },
            get: function(studentId) {
                // Simple index lookup
                return categories[studentId];
            }
        }
    });
