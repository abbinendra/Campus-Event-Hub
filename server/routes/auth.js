const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const exists = await User.findOne({ $or: [{ username }, { email }] });
    if (exists) {
      return res.json({ success: false, message: "Username or email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userRole = role || "student";
    await User.create({ username, email, password: hashedPassword, role: userRole });

    res.json({ success: true, token: "dummy_token", role: userRole });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    // normalize and trim incoming input
    const emailInput = (req.body.email || "").toString().trim().toLowerCase();
    const passwordInput = (req.body.password || "").toString();

    console.log("LOGIN HIT - email:", emailInput);

    if (!emailInput || !passwordInput) {
      return res.json({ success: false, message: "Email and password are required" });
    }

    const user = await User.findOne({ email: emailInput });
    console.log("User role from DB:", user.role);
    if (!user) {
      console.log("LOGIN FAIL - user not found for:", emailInput);
      return res.json({ success: false, message: "User not found" });
    }

    console.log("Stored hash length:", (user.password || "").length);

    const isMatch = await bcrypt.compare(passwordInput, user.password);
    console.log("Bcrypt compare result:", isMatch);

    if (!isMatch) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    console.log("Sending response:", { role: user.role });
    res.json({
      success: true,
      token: "dummy_token",
      role: user.role,
      email: user.email
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;