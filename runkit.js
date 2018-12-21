const gradespeed = require("gradespeed-hisd")

const username = 'student\\s1535208'
const password = '03312001'

gradespeed(username, password)
  .then(returnArr => {
    console.log(JSON.stringify(returnArr, null, 2))
  })
  .catch(error => {
    console.log(error)
  })