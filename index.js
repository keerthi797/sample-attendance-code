const csvtojson=require('csvtojson')
const csvfilepath='students.csv'

csvtojson()
.fromFile(csvfilepath)
.then((json)=>{
    console.log(json)
})