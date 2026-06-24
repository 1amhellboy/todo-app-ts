import express from 'express';
const app = express();

const users = [];

app.post("/signup",(req,res)=>{
	const { username, password } = req.body;
	users.push({username, password});

	req.json({message:"done"});
});

app.listen(3000);