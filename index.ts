import express from 'express';
const app = express();

const users = [];

app.use(express.json());


app.post("/signup",(req,res)=>{
	const { username, password } = req.body;
	users.push({username, password});

	res.json({message:"done"});
});

app.listen(3000);