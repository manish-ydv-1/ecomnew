import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Your registration route logic
router.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body;
  console.log(req.body);

  try {
    // const newUser = new User( name, email, phone, password );
    // await newUser.save();
    await User.create({
      name: name,
      email: email,
      phone: phone,
      password: password,
    });
    res.status(200).json("success");
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error registering user", error: error.message });
  }
});

export default router;
