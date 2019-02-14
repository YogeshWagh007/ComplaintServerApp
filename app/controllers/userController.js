
const services = require('../services/services');

module.exports = {
    registerUser : async (req,res,next)=>{
   
        var user = {
            email : req.body.email,
            password : req.body.password
        };

        await services.userService.createUser(user).then((userResult)=>{
            res.send({
                status: true,
                data: userResult,
                message: "User created"
            });
        }).catch((err)=>{
            console.log(err);
            res.send({
                status: false,
                error: err,
                message : 'Error provide valid data.'
            });
        })
    },

    loginUser : async (req,res,next)=>{
        await services.userService.findUserByEmailAndPassword(req.body.email,req.body.password).then((userResult)=>{
            res.send({
                status: true,
                data : userResult,
                message : 'User Exists.'
            });
        }).catch((err)=>{
            res.send({
                status: false,
                error : err,
                message : 'User dose not exists.'
            });
        })
        
    },
    getUserById : async (req,res,next)=>{
        await services.userService.findUserById(req.body.id).then((userResult)=>{
            res.send({
                status: true,
                data : userResult,
                message : 'User exists.'
            });
        }).catch((err)=>{
            console.log(err);
            res.send({
                status: false,
                error : err,
                message : 'User dose not exists.'
            });
        })
        
    }
}

