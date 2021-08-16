students=[
  { username: 'DPA1990', name: 'Abigail', stclass: '2', section: 'B' },
  {
    username: 'DPA1991',
    name: 'Alexandra',
    stclass: '2',
    section: 'B',
    
  },
  { username: 'DPA1992', name: 'Alison', stclass: '2', section: 'B'},
  { username: 'DPA1993', name: 'Amanda', stclass: '2', section: 'B' },
  { username: 'DPA1994', name: 'Amelia', stclass: '2', section: 'B'},
  { username: 'DPA1995', name: 'Amy', stclass: '2', section: 'B' },
  { username: 'DPA1996', name: 'Andrea', stclass: '2', section: 'A' },
  { username: 'DPA1997', name: 'Angela', stclass: '2', section: 'A' },
  { username: 'DPA1998', name: 'Anna', stclass: '2', section: 'A' },
  { username: 'DPA1999', name: 'Anne', stclass: '2', section: 'A' },
  { username: 'DPA2000', name: 'Audrey', stclass: '2', section: 'A' },
  { username: 'DPA2001', name: 'Ava', stclass: '2', section: 'A' },
  { username: 'DPA2002', name: 'Bella', stclass: '2', section: 'A' },
  {
    username: 'DPA2003',
    name: 'Bernadette',
    stclass: '3',
    section: 'A',

  },
  { username: 'DPA2004', name: 'Carol', stclass: '3', section: 'A'},
  { username: 'DPA2005', name: 'Caroline', stclass: '3', section: 'A' },
  { username: 'DPA2006', name: 'Carolyn', stclass: '3', section: 'A' },
  { username: 'DPA2007', name: 'Chloe', stclass: '3', section: 'A' },
  { username: 'DPA2008', name: 'Claire', stclass: '3', section: 'A'},
  { username: 'DPA2009', name: 'Deirdre', stclass: '3', section: 'A' },
  { username: 'DPA2010', name: 'Diana', stclass: '4', section: 'B' },
  { username: 'DPA2011', name: 'Diane', stclass: '4', section: 'B' },
  { username: 'DPA2012', name: 'Donna', stclass: '4', section: 'B' },
  { username: 'DPA2013', name: 'Dorothy', stclass: '4', section: 'B' },
  {
    username: 'DPA2014',
    name: 'Elizabeth',
    stclass: '4',
    section: 'B',
    
  },
  { username: 'DPA2015', name: 'Ella', stclass: '4', section: 'B'  },
  { username: 'DPA2016', name: 'Emily', stclass: '4', section: 'A' },
  { username: 'DPA2017', name: 'Emma', stclass: '4', section: 'A'  },
  { username: 'DPA2018', name: 'Faith', stclass: '4', section: 'A' },
  { username: 'DPA2019', name: 'Felicity', stclass: '4', section: 'A' },
  { username: 'DPA2020', name: 'Fiona', stclass: '4', section: 'A'},
  {
    username: 'DPA2021',
    name: 'Gabrielle',
    stclass: '4',
    section: 'A',
    
  },
  { username: 'DPA2022', name: 'Grace', stclass: '4', section: 'A'  },
  { username: 'DPA2023', name: 'Hannah', stclass: '4', section: 'A' }
]


 
function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min);
} 

//setting month

var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var monthName=months[d.getMonth()-1];
console.log(`${monthName} month attendance record`)

var sat = new Array();   
var sun = new Array();
var wholedays = daysInMonth(d.getMonth(),d.getFullYear());
console.log(`${wholedays} days in the month of ${monthName}` )//Get total days in a month

for(var i=1;i<=wholedays;i++){   
    var newDate = new Date(d.getFullYear(),d.getMonth()-1,i)
    if(newDate.getDay()==0){       
      sat.push(i);  
       
    } 
    if(newDate.getDay()==6){   
        sun.push(i);          
    }
}
const holiday=sat.concat(sun)
console.log(`Holidays in the month of ${monthName}: `,holiday)
// console.log('Saturday :',sat);
// console.log('Sunday :',sun);


function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}
// daysInMonth(7,2021)
totalWorkingDays=wholedays-(sat.length+sun.length)
console.log(`Total working days : ${totalWorkingDays}`)
totalStudentCount=students.length
console.log(`Total Students : ${totalStudentCount}`)


var studentAbsence={}


function generateAttendance(student){

  var absentees=[]
  var absentee=[]
  var studentAbsent={}
  var studAbsence={}
  var count=0
  var month=7
  var year= 2021  
  holidays=holiday
  var noOfDays=daysInMonth(month,year)
 
  
 var stclass=[1,2,3,4,5,6,7,8,9]
 var section=['A','B','C']
  for(let i=0;i<stclass.length;i++){
    for(let j=0;j<section.length;j++){
     var newList=student.filter((stud)=>{
       return (stclass[i]==stud.stclass && section[i]==stud.section)    
       

      });
  
    
      if(newList.length>0){
        
        for(let i=1;i<=noOfDays;i++){
        
          if(holidays.indexOf(i)!==-1){
            continue;

          }else{
            studentAbsent.date=[]
            studentAbsent.absent=[]
            studentAbsent.stclass=[]
            studentAbsent.section=[]
            count+=1      
         
          }
      var noOfAbsentees=randomNumber(1,5)
        console.log(noOfAbsentees)
        for(let i=0;i<noOfAbsentees;i++){
          absenteesIndex=randomNumber(0,students.length)
          studentAbsent.absent.push(students[absenteesIndex].name)
        }
      
     
     
        studentAbsent.date.push(`0${month}/${i}/${year}`)
        studentAbsent.stclass.push(students[absenteesIndex].stclass)
        studentAbsent.section.push(students[absenteesIndex].section)
        studAbsence ={...studentAbsent} 
        console.log(studAbsence)   
       
    
        
      }    
       
     }    
    
     }      

     }
    } 
    
    generateAttendance(students)








