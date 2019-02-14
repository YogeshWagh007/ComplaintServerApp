
const services = require('../services/services');

module.exports = {
    registerComplaint : async (req,res,next)=>{
        
        var complaint = {
            title : req.body.title,
            description : req.body.description,
            status: req.body.status,
            email : req.body.email,
            actionLog : req.body.actionLog,
			createdAt : req.body.createdAt
        };
        
        await services.complaintService.createComplaint(complaint).then((complaintResult)=>{
            console.log(complaintResult);
            res.send({
                status: true,
                data: complaintResult,
                message: "Complaint Register Successfully."
            });
        }).catch((err)=>{
            console.log(err);
            res.send({
                status: false,
                error: err,
                message : 'Error Provide Valid Data.'
            });
        })
    },
    getAllComplaints : async (req,res,next)=>{
        await services.complaintService.getAllComplaints().then((complaintResult)=>{
            res.send({
                status: true,
                data : complaintResult,
                message : 'Return All Complaints.'
            });
        }).catch((err)=>{
            res.send({
                status: false,
                error : err,
                message : 'Error Fetching the records from Database.'
            });
        })
    },
     deleteComplaint : async (req,res,next)=>{
        await services.complaintService.deleteComplaint(req.params['id']).then((complaintResult)=>{
            res.send({
                status: true,
                data : complaintResult,
                message : 'Complaint deleted.'
            });
        }).catch((err)=>{
            res.send({
                status: false,
                error : err,
                message : 'Error Fetching the records from Database.'
            });
        })
    },
    
    updateComplaint : async (req,res,next)=>{

        var complaint = {};

        if(req.body.title){
            complaint.title = req.body.title;
        }if(req.body.description){
            complaint.description = req.body.description;
        }if(req.body.status){
            complaint.status = req.body.status;
        }if(req.body.email){
            complaint.email = req.body.email;
        }if(req.body.actionLog){
            complaint.actionLog = req.body.actionLog;
        }else{

        } 
        
        

        

        await services.complaintService.updateComplaintById(req.params['id'],complaint).then((complaintResult)=>{
            res.send({
                status : true,
                data: complaintResult,
                message : 'Complaint updated Successfully.' 
            });
        }).catch((err)=>{
            res.send({
                status:false,
                error:err,
                message: 'Error while updating Complaint.'
            });
        })
    }
}

