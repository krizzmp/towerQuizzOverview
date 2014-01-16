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
          name: 'Charlie Sheen',
          qa: 12,
          ca:6,
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
          name: 'David Williams',
          qa: 9,
          ca:8,
          ha:1,
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
      },{
          id: 3,
          name: 'Michael Bluth',
          qa: 10,
          ca:9,
          ha:1,
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
            color:'balanced',
            students:[
                {
                    id:0,
                    name:"Abraham Lincoln",
                    qa:10,
                    ca:9,
                    ha:4
                },{
                    id:1,
                    name:"Charlie Sheen",
                    qa:9,
                    ca:8,
                    ha:3
                }
            ]
        },{
            id: 0,
            q: 'Is the sky blue2?',
            qa: 10,
            ca:6,
            ha:2,
            color:'assertive',
            students:[
                {
                    id:0,
                    name:"Abraham Lincoln",
                    qa:10,
                    ca:9,
                    ha:4
                },{
                    id:1,
                    name:"Charlie Sheen",
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
                color:'energized',
                questions:[
                    {
                        id:0,
                        q:"Is the sky blue?",
                        qa:10,
                        ca:9,
                        ha:4,
                        color:'balanced'
                    },{
                        id:1,
                        q:"Is the sky blue2?",
                        qa:9,
                        ca:8,
                        ha:3,
                        color:'energized'
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
