import { ComplaintModel } from "../model/Complaint.model.js"; // Adjust path as needed

import jwt from "jsonwebtoken"; // Make sure to install this package

const getComplaint = async (req, res) => {
    try {
        console.log(req.body)
        const { name, address, type, description } = req.body;
        const complaint = new ComplaintModel({ name, address, type, description });
        await complaint.save();
        res.status(201).json({ message: "Complaint saved", complaint });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const fetch_Complaints = async (req, res) => {
    try {
        const complaints = await ComplaintModel.find();
        console.log(complaints);
        res.status(200).json({ complaints });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (username !== "Geafarjangarh" || password !== "MES@2858") {
            return res.status(401).json({ success: false });
        }
        // Generate JWT token
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.cookie("token", token, { httpOnly: true, maxAge: 86400000, sameSite: 'lax' });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { getComplaint,fetch_Complaints,login }

