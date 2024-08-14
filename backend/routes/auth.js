import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../database/UserSchema.js";

const router = express.Router();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const upload = multer();

router.use(jsonParser);
router.use(urlencodedParser);

const getUserClaims = (req) => {
  const token = req.cookies.token;
  if (!token) return null;
  try {
    const claims = jwt.verify(token, process.env.JWT_SECRET);
    return claims;
  } catch (error) {
    return null;
  }
};

//API to Signup a user.
router.post("/signup", upload.none(), async (req, res) => {
  const { username, password, email } = req.body;
  // Input validation
  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ error: "Username, password, and email are required" });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this email already exists" });
    }

    // Password hashing
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      // Add other fields as needed
    });

    await newUser.save();

    // Optional: Send email verification link
    // ...

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error during user signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//API to Login a user.
router.post("/login", upload.none(), async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "No such username found" });

    // Verify password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: "Invalid password" });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    // Return success message
    res.status(201).json({ message: "Login successful" });
  } catch (err) {
    console.error("Error during user login:", err);
    res.status(500).json({ message: "Server error" });
  }
});

//API to Auto Login a user.
router.get("/auto-login", async (req, res) => {
  // Get user claims from the token
  const claims = getUserClaims(req);

  if (!claims) {
    return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
  }

  try {
    // Find the user by ID from the claims
    const user = await User.findById(claims.id).select("-password"); // Exclude the password from the result
    if (!user) return res.status(404).json({ message: "User not found" });

    // Send user data if token is valid
    res.json({ message: "Auto-login successful", user });
  } catch (err) {
    console.error("Error during auto-login:", err);
    res.status(500).json({ message: "Server error" });
  }
});

//API to Logout a user.
router.get("/logout", (req, res) => {
    try {
        res.clearCookie("token");
        res.status(201).json({ message: "Logout successful" });
    } catch (err) {
        console.error("Error during logout:", err);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;