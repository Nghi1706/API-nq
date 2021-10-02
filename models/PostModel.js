import mongoose from "mongoose";
const cost = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    SL: {
        type: Number,
        required: true,
        default: 1,
    },
});
const schedule = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    mail: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'new',
    },
});

export const PostModel = mongoose.model('Post', cost);
export const ScheduleModel = mongoose.model('schedule', schedule);