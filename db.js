const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getListing: getListing,
  getUser: getUser,
  newListing: newListing
  // newProfile: newProfile
}

// make this getListings
function getListing (db = connection) {
  return db('listings')
    .select()
}

// make this newListing
function newListing (title, description, db = connection) {
  return db('listings')
    .insert({
      title: title,
      description: description
    })
    
}

function getUser (id, db = connection) {
  return db('users')
    .join('listings', 'users.id', 'listings.user_id')
    .where('users.id', id)
    .select()
}

