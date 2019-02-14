const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/complaints', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
var Schema = mongoose.Schema;

  var userSchema = new Schema({
    email : {
        type: String,
        maxlength : 100,
        minlength : 10,
        unique : true
    },
    password : {
        type: String,
        maxlength : 100,
        minlength : 6
    }
});

var User = mongoose.model('User', userSchema);

module.exports = {

    createUser : (user)=>{
        return new Promise((resolve , reject)=>{
            User.create(user , (err,res)=>{
                if(!err){
                    resolve(res);
                }else{
                    reject(err);
                }
            })
        })
       
    },
    findUserByEmailAndPassword : (email,password)=>{
        return new Promise((resolve,reject)=>{
            User.findOne({email : email , password : password}, (err,result)=>{
                if(!err){
                    if(result != null){
                        resolve(result);
                    }else{
                        reject(result);
                    }
                    
                }else{
                    reject(err);
                }
            })
        })
    },
    findUserById : (id)=>{
        return new Promise((resolve,reject)=>{
            User.findById(id, (err,result)=>{
                if(!err){
                    if(result != null){
                        resolve(result);
                    }else{
                        reject(result);
                    }
                    
                }else{
                    reject(err);
                }
            })
        })
    }

}