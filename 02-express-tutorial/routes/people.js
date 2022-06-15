const express = require('express')
const router = express()
// const { people } = require('../data')
const { getPeople, getPersonById, postPerson, updatePerson, deletePerson } = require('../controllers/people.js')

router.route('/').get(getPeople).post(postPerson)
router.route('/:id').get(getPersonById).put(updatePerson).delete(deletePerson)
module.exports = router
