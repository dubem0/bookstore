app.post ('/sigin', (req,res) =>{
    const {username, password} = req.body;
    username.findOne({username},(err, user) =>{
        if (err){
        return res.ststus(500).json({message: "Internal server error"});
        }
        if (!user) {
            return res.ststus(401).jsom({mesage: "Username or password is incorrecr"});
        }
        if(password !=user.password){
            return res.status (404).json({message:"Usernane os password is incorrect"});
        }
        const token = Buffer.from(`$(username): $(password)`).toString("base64");
        return res.status(200).json({message: "Auth successful", token});
        });
    });