let ContentInfo=require("../models/Display")
let ContentController=async(req,res)=>{
    try{
        let info=await ContentInfo.find({})
        return res.status(200).json(info)
    }catch(error){
        console.log(`ContentController.js --> ${error}`)
        return res.status(500).json({'message':'fail'})
    }
}
module.exports=ContentController