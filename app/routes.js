const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/ir35-answer', function (req, res) {
  // Get the answer from session data

  const ir35 = req.session.data['ir35']

  if (ir35 === 'no') {
    res.redirect('/ir35-no')
  } else {
    res.redirect('/sign-in')
  }
})

module.exports = router
