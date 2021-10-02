import { PostModel } from "../models/PostModel.js"

export const getCost = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err });
    }

}

export const createCost = async (req, res) => {
    try {
        const newcost = req.body;
        const posts = new PostModel(newcost);
        await posts.save()
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
export const updateCost = async (req, res) => {
    try {
        const updatePost = req.body;
        const posts = await PostModel.findOneAndUpdate({ _id: updatePost._id }, updatePost, { new: true })
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
export const deleteCost = async (req, res) => {
    try {
        const deletePost = req.body;
        const posts = await PostModel.findOneAndDelete({ _id: deletePost._id })
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}