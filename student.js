// var CSV_DATA = new Array()
//     [
//       name: 'Sally Student',
//       id: 'SOO1',
//       assignment: 'Assignment 1',
//       score: 95
    

    
//         name: 'Johnny Readerman',
//         id: 'S002',
//         assignment: 'Assignment 1',
//         score: 71
    

    
//         name:'Tony Thinkerson',
//         id: 'S003',
//         assignment: 'Assignment 1',
//         score: 88
    

    
//         name: 'Johnny Readerman',
//         id: 'S002',
//         assignment: 'Assignment 2',
//         score: 90
   

    
//         name: 'Sally Student',
//         id: 'S001',
//         assignment: 'Assignment 2',
//         score: 100
   

    
//         name: 'Tony Thinkerson',
//         id: 'S003',
//         assignment: 'Assignment 2',
//         score: 57
    

   
//         name: 'Sally Student',
//         id: 'S001',
//         assignment: 'Assignment 3',
//         score: 85
   

    
//         name: 'Tony Thinkerson',
//         id: 'S003',
//         assignment: 'Assignment 3',
//         score: 80,
    

    
//         name: 'Johnny Readerman',
//         id: 'S002',
//         assignment: 'Assignment 3',
//         score: 0
    
//   ];

// var CSV_DATA = new Array('name', 'id','score') 
// student[0] = newAssignment("Sally Student", "S001", 95); 
// student[1] = newAssignment("Johnny Readerman", "S002", 71); 
// student[2] = newAssignment("Tony Thinkerson", "S003", 88); 
// student[3] = newAssignment("Johnny Readerman", "S002", 90); 
// student[4] = newAssignment("Sally Student", "S001", 100); 
// student[5] = newAssignment("Tony Thinkerson", "S003", 57); 
// student[6] = newAssignment("Sally Student", "S001", 85); 
// student[7] = newAssignment("Tony Thinkeson", "S003", 80);
// student[8] = newAssignment("Johnny Readerman", "S002", 0);  

// var CSV_DATA = 

//   grade[0][0] = "Sally Student" 
//   grade[0][1] = "S001" 
//   grade[0][2] = 95 
//   grade[1][0] = "Johnny Readerman" 
//   grade[1][1] = "S002" 
//   grade[1][2] = 71 
//   grade[2][0] = "Tony Thinkerson" 
//   grade[2][1] = "S003" 
//   grade[2][2] = 88 
//   grade[3][0] = "Johnny Readerman" 
//   grade[3][1] = "S002" 
//   grade[3][2] = 90 
//   grade[4][0] = "Sally Student" 
//   grade[4][1] = "S001" 
//   grade[4][2] = 100
//   grade[5][0] = "Tony Thinkerson"
//   grade[5][1] = "S003"
//   grade[5][2] = 57
//   grade[6][0] = "Sally Student"
//   grade[6][1] = "S001"
//   grade[6][2] = 85
//   grade[7][0] = "Tony Thinkerson"
//   grade[7][1] = "S003"
//   grade[7][2] = 80
//   grade[8][0] = "Johnny Readerman"
//   grade[8][1] = "S002"
//   grade[8][2] = 0


//   function newAssignment( name, id, score ) { 
  
//     this.name = name; 
//     this.id = id; 
//     this.score = score; 
// } 


var CSV_DATA = new Array ({001: {name: 'Sally Student', score: 15}, 002: {name: 'Johnny Readerman', score: 5}, 003: {name: 'Tony Thinkerson', score: 16}})

const result = Object.entries(obj1).reduce(
  // group is the key from obj1, e.g. "A"
  // properties is the object for that key, e.g. { bottom: 63, mid: 4, top: 15 }
  (acc, [id, {properties}]) => [
    ...acc, { id, ...properties }
  ], []
);

console.log(result);


Object.values(CSV_DATA.reduce((acc, curr) => {
    if(acc[curr.id]) {
      acc[curr.id].scores+=curr.score
    }
    else {
      acc[curr.id] = {
        name: curr.name,
        score: curr.score
      }
    }
  
    return acc
  }, {})).map(item => ({
    name: item.name,
    grade: transformScoreToGrade(item.score) 
  }))
 

