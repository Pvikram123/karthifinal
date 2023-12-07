const express=require("express")
const authrouter =express.Router()
const post_user=require("../controllers/backend/controlpost")
const find=require("../controllers/backend/update")
const {get,getid,getname,getdate} = require("../controllers/backend/controlfind")


const postfn=require('../controllers/frontend/post')
const update=require("../controllers/frontend/update")
const findfn=require("../controllers/frontend/findall")
const findbydatefn=require("../controllers/frontend/findbydate")
const findbynamefn=require("../controllers/frontend/findbyname")
const finefn=require("../controllers/frontend/find")

authrouter.post('/post',post_user);
authrouter.get('/',get);
authrouter.get('/get/:id',getid);
authrouter.post('/put/',find.put_user);
authrouter.post('/get',getname);
authrouter.post('/date',getdate);


authrouter.post('/postfn',postfn);
authrouter.post('/updatefn',update);
authrouter.get('/findfn',findfn);
authrouter.get('/findbydatefn',findbydatefn);
authrouter.get('/findbynamefn',findbynamefn)
authrouter.get('/finefn',finefn)
module.exports=authrouter;

