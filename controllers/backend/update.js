const karthi=require("../../model/data")

exports.put_user=async(req,res)=>{
    try{
        const update=req.body;
        console.log(update)
       const s= await karthi.findOneAndUpdate({item:req.body.item},update)
        res.send(`<body style="background-repeat: no-repeat;background-size:100%; background-image: url('https://thumbs.dreamstime.com/z/update-software-computer-program-upgrade-business-technology-internet-concept-update-software-computer-program-upgrade-business-104512037.jpg')";></body>`)
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
}
