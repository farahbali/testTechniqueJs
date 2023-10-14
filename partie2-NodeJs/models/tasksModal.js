import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const taskSchema=new Schema({
    title:{
        type: String,
        required: true,
    },
    done:{
        type: 'boolean',
        default: false,
    }
},{timestamps:true})

const Task = mongoose.model('Task', taskSchema);

export default Task