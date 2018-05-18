
//** Creating server using express **/
const express =require('express'); //importing express

const app = express(); //calling express

app.get('/',(req,res)=>res.send("hello"));//creating a simple request

const port=process.env.port || 5000;// creating the port 

app.listen(port,()=>console.log(`Server running on port ${port}`));//listening to the port 