const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',(req,res) =>{
	res.send("hey");
})

// mongoose ka jitna bhi code hoga vo asynchronous means iski baad ki line ka code pahle chal jayega to apan use karenge async await


// create
app.get('/create', async (req,res) =>{
	let createduser = await userModel.create({
		name: "vikas",
		email: "vikaschoudhary@gmail.com",
		username: "vikas24"	
	});  

	res.send(createduser);
})

app.get('/read', async (req,res) =>{
    let user = await userModel.find();
    res.send(user);
})

app.get('/update', async (req,res)=>{
    let updatedUser = await userModel.findOneAndUpdate({username: "vikas24"}, {name: "vikas choudhary"}, {new: true});
    res.send(updatedUser);
})

app.get("/delete", async (req,res) =>{
	let Deletedusers = await userModel.findOneAndDelete({username: "vikas24"});
	res.send(Deletedusers);
})

app.listen(3000);
