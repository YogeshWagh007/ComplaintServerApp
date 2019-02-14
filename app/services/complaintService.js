const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/complaints', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
var Schema = mongoose.Schema;

  var complaintSchema = new Schema({
    title: {
        type : String
    },
    description: {
        type : String
    },
    status: {
        type: String,
        enum : ['registered','resolved','pending'],
        default : 'registered'
    },
    email : {
        type : String
    },
    actionLog : [String]
    
	},

	{
    timestamps: true
	});

var Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = {

    createComplaint : (complaint)=>{
        console.log(complaint);
        return new Promise((resolve , reject)=>{
            Complaint.create(complaint , (err,res)=>{
                if(!err){
                    resolve(res);
                }else{
                    reject(err);
                }
            })
        })
       
    },
    getAllComplaints : ()=>{
        return new Promise((resolve,reject)=>{
            Complaint.find({},(err,result)=>{
                if(!err){
                    resolve(result);
                }else{
                    reject(err);
                }
            })
        })  
    },
    findComplaintById : (id)=>{
        return new Promise((resolve,reject)=>{
            User.findOne({_id : id}, (err,result)=>{
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
    updateComplaintById : (id , complaint)=>{
        console.log(complaint);
        return new Promise((resolve,reject)=>{
            Complaint.findByIdAndUpdate( { _id : id} , {$set : complaint},{ new: true }, (err,result)=>{
                if(!err){
                    resolve(result);
                }else{
                    reject(err);
                }
            })
        })
    },
    deleteComplaint : (id) =>{
        console.log(id);
        return new Promise((resolve,reject)=>{
            Complaint.findByIdAndDelete(id,(err,result)=>{
                if(!err){
                    resolve(result);
                }else{
                    reject(err);
                }
            })
        })
    }

}