import { ScheduleModel } from "../models/PostModel.js";

export const getSchedules = async (req, res) => {
    try {
        const schedule = await ScheduleModel.find();
        res.status(200).json(schedule);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const createSchedules = async (req, res) => {
    try {
        const newSchedule = req.body;
        const schedule = new ScheduleModel(newSchedule);
        await schedule.save()
        res.status(200).json(schedule);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
export const updateSchedules = async (req, res) => {
    try {
        const updateSchedules = req.body;
        const schedule = await ScheduleModel.findOneAndUpdate({ _id: updateSchedules._id }, updateSchedules, { new: true })
        res.status(200).json(schedule);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
