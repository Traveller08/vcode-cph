import express from "express" 
import cors from 'cors'

import { login,signUp,getUserData } from "./database.js"
import {validate_details} from "./validate_details.js"



const app=express()
app.use(cors())
app.listen(5000,()=>{
    console.log("server started on port 5000")
})
app.get('/login',async(req,res)=>{
    try{
        const status=await login(req.query)
        console.log('status',status)
        if(status){
            const user_data = await getUserData(req.query);
            // console.log('user details ',JSON.stringify(user_data));
            // window.localStorage.setItem('user',JSON.stringify(user_data))
            // console.log('userdata : ',user_data)
            // console.log('userdata : ',window.localStorage.getItem('user'))
            res.json({'status':'ok','details':'correct','data':user_data})
        }else{
            res.json({'status':'ok','details':'wrong','data':""})            
        }
    }catch(error){
        res.json({'status':error.message,'details':''})
    }

})

app.get('/signup',async(req,res)=>{
    console.log('signup clicked');
    try{
        if(validate_details(req.query)){
            const status=await signUp(req.query)
            console.log('status',status)
            if(status){
                res.json({'status':'ok','details':'correct'})
            }else{
                res.json({'status':'ok','details':'username already exists'})            
            }
        }else{
            console.log("invalid details")
            res.json({'status':'ok','details':'please fill all the fields'})
        }
        
    }catch(error){
        console.log("error ",error)
        res.json({'status':error.message,'details':''})
    }

})
app.get("/home",(req,res)=>{
    res.json({ "data": ["d1","d2","d3"]})
})

