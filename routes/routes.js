const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  // the root route renders the landing page
})

router.get('/listings', (req, res) => {
  db.getListing()
    .then(listings => {
      console.log(listings[0])
      res.render('alllistings', { listings })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// make this the form page
router.get('/form', (req, res) => {
  res.render('form')
})

router.get('/home', (req, res) => {
  res.render('home')
})

router.post('/listings', (req, res) => {
  const id = Number(req.body.user_id)
  const title = req.body.title
  const description = req.body.description
  db.newListing(id, title, description)
    .then(getListings)
    .catch(displayErrors)

  function getListings () {
    return res.redirect('/listings')
  }
  function displayErrors (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

// // make this new listing
// router.post('/new-profile', (req, res) => {
//   const imageUrl = req.body.imageUrl
//   const pageUrl = req.body.pageUrl
//   db.newProfile(imageUrl, pageUrl)
//   .then(function () {
//     return res.redirect('/home')
//   })
//   .catch(err => {
//     res.status(500).send('DATABASE ERROR: ' + err.message)
//  })
// })

// router.get('/new-profile', (req, res) => {
//   res.render('newprofile')
// })

// router.get('/profile/:id', (req, res) => {
//   const id = Number(req.params.id)
//   db.getUser(id)
//     .then(profiles => {
//       res.render('profiles', {profiles: profiles})
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

module.exports = router
