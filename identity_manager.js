const express = require('express');
const { manageIdentity } = require('../services/identity/identity_manager');

const router = express.Router();

router.post('/verify', async (req, res) => {
  const { userAddress, userData } = req.body;

  try {
    const identities = await manageIdentity(userAddress, userData);
    res.json({ success: true, identities });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;