let mongoose=require('mongoose')
// let URL=`mongodb+srv://${process.env.DB_USERNAME}:@portfolio.txw6oe8.mongodb.net/?retryWrites=true&w=majority`
let URL=`mongodb+srv://arjunthakur:${process.env.DB_PASSWORD}@portfolio.wgxtdb2.mongodb.net/Main?retryWrites=true&w=majority`
let connection=async()=>{
    try {
        console.log(URL)
        await mongoose.connect(URL,{useNewUrlParser:true})
        console.log(`connected`)
    } catch(error) {
        console.log(`database.js --> ${error}`)
    }
}

module.exports=connection