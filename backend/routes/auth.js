const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// ✅ POST /api/signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;


  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });


    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Server error during signup' });
  }
});

// ✅ POST /api/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    // ✅ Return the name
    res.json({
      message: "Login successful",
      userId: user._id,
      name: user.name,
      isAdmin: user.isAdmin 
    });




  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// PUT /api/user/:id - Update user's name
router.put('/user/:id', async (req, res) => {
  const { name } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true } // return the updated user
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Name updated successfully', name: updatedUser.name });
  } catch (err) {
    console.error('Error updating name:', err);
    res.status(500).json({ message: 'Server error while updating name' });
  }
});

// GET /api/user/:userId
router.get('/user/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select('name email');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: 'Server error while fetching user info' });
  }
});


module.exports = router;
