// import model / table
import userModel from "../model/userModel.js";


const createUser = async(req, res) => {
    const User = new userModel(req.body);
    try {
        const save = await User.save();
        res.status(201).json(save);
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        });
    }
}

export { createUser }