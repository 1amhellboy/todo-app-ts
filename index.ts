import express from 'express';
const app = express();

const users = [];

app.use(express.json());


app.post("/signup",(req,res)=>{
	const { username, password } = req.body;
	const user = users.find(u => u.username === username);
	if(user){
		res.status(404).json({message:"user with this username already exists"});
	}

	users.push({username, password});

	res.json({message:"done"});
});

app.listen(3000);