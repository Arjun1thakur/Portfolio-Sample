let ContactMe=require("../models/ContactMe")
let MessageController=async(req,res)=>{
    let {name,email,message}=req.body
    try{
        let info=await ContactMe.insertMany({name,email,message})
        return res.status(200).json(info)
    }catch(error){
        console.log(`ContactController.js --> ${error}`)
        return res.status(500).json({'message':'fail'})
    }
}
module.exports=MessageController