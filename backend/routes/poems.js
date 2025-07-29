const express = require('express');
const router = express.Router();
const Poem = require('../models/Poem');

router.post('/submit', async (req, res) => {
  console.log('Poem submission received:', req.body);

  const { title, author, category, content, tags, userId } = req.body;

  try {
    const newPoem = new Poem({
      title,
      author,
      category,
      content,
      tags: tags.split(',').map(tag => tag.trim()),
      userId
    });

    await newPoem.save();
    res.status(201).json({ message: 'Poem submitted successfully' });
  } catch (err) {
    console.error('Error submitting poem:', err.message);
    res.status(500).json({ message: 'Server error while submitting poem' });
  }
});
// GET /api/poems/user/:userId
router.get('/poems/user/:userId', async (req, res) => {
  try {
    console.log("Fetching poems for user:", req.params.userId);
    const poems = await Poem.find({ userId: req.params.userId });
    console.log("Poems found:", poems); 
    res.json(poems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching poems' });
  }
});

// ✅ Get all unapproved poems (for Admin)
router.get('/admin/unapproved-poems', async (req, res) => {
  try {
    const poems = await Poem.find({ approved: false }).populate('userId', 'name');
    res.json(poems);
  } catch (err) {
    console.error("Error fetching unapproved poems:", err);
    res.status(500).json({ message: 'Server error while fetching unapproved poems' });
  }
});

// ✅ Approve or Reject a poem (for Admin)
router.put('/admin/poems/:id/approve', async (req, res) => {
  const { approved } = req.body;

  try {
    const updatedPoem = await Poem.findByIdAndUpdate(
      req.params.id,
      { approved },
      { new: true }
    );

    if (!updatedPoem) {
      return res.status(404).json({ message: 'Poem not found' });
    }

    res.json({
      message: approved ? 'Poem approved' : 'Poem rejected',
      poem: updatedPoem
    });
  } catch (err) {
    console.error("Error updating poem status:", err);
    res.status(500).json({ message: 'Server error while updating poem status' });
  }
});

// ✅ Public: Get only approved poems (for /poems page)
router.get('/poems', async (req, res) => {
  try {
    const poems = await Poem.find({ approved: true });
    res.json(poems);
  } catch (err) {
    console.error("Error fetching approved poems:", err);
    res.status(500).json({ message: 'Error fetching approved poems' });
  }
});

module.exports = router;
