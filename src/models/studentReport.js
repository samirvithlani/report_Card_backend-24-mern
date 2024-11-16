const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentReport = new Schema({

    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    faculty: {
        type: Schema.Types.ObjectId,
        ref: 'Faculty',
        required: true
    },
    regularity:{
        type:Number,
        //required:true
    },
    communication:{
        type:Number,
        //required:true
    },
    discipline:{
        type:Number,
        //required:true
    },
    testPerformance:{
        type:Number,
        //required:true
    },
    
}, {
    timestamps: true
    
})
module.exports = mongoose.model('StudentReport', studentReport);