var sa = require('../')

var creds = require('./creds.json')

var date = '2016-01-05'

sa(creds.token, date, function (err, rows) {
  if (err) return console.error(err)
  console.log('rows', rows)
})
