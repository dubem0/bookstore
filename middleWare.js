const users = require("./Models/users")
async function authenticate (req,res, next){
    if(req.headers.authorization){
        const authHeader = req.headers.authorization.split(' ');
        const authType = authHeader [0];
        const authValue = authType[1];
 
        if (authType === 'Basic'){
            const [username, password] =  Buffer.from(authValue, 'base64').toString().split(':');
 
            const user = await users.findOne({username});
 
            if (!user) {
                return res.status(401).json({
                    message: "authentication failed"
                });
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password)
            if (password === users.password) {
                req.user = users.username;
                next();
 
            } else {
                return res.status(401).json({
                    message: 'Username or password is incorrect'
                })
            }
            } else{
                return res.status(401).json({
                message: 'Unathorized'
            });
        }
    } else {
        return res.status(401).json({
            message: 'Auth failed'
        })
    }
 }
 
 
module.exports = authenticate