let mongoose=require("mongoose")
require("dotenv").config()
let HomeData=require("./sample-data/DisplayData")
let Home=require("./models/Display")
let connection=require("./database/database")


connection();

const importData=async ()=>{
    try {
        await Home.deleteMany()
        await Home.insertMany(HomeData)
        console.log('done')
        process.exit()
    } catch (error) {
        console.log("Sender",error)
        process.exit()
    }
}
const replaceData=async ()=>{
    try {
        await Home.deleteMany()      
        console.log('done')
        process.exit()
    } catch (error) {
        console.log("Sender",error)
        process.exit()
    }
}

if(process.argv[2]==="-d"){
    replaceData()
}else{
    importData()
}