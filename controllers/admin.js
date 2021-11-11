import { AdminModel } from "../models/PostModel.js"

export const getinfo = async (req, res) => {
    try {
        const posts = await AdminModel.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err });
    }

}

export const createinfo = async (req, res) => {
    try {
        const newinfo = req.body;
        const posts = new AdminModel(newinfo);
        await posts.save()
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
export const updateinfo = async (req, res) => {
    try {
        const updatePost = req.body;
        const posts = await AdminModel.findOneAndUpdate({ _id: updatePost._id }, updatePost, { new: true })
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
export const deleteinfo = async (req, res) => {
    try {
        const deletePost = req.body;
        const posts = await AdminModel.findOneAndDelete({ _id: deletePost._id })
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}