var jsonist = require('jsonist')

var urlBase = 'https://sfx.stickyadstv.com/api/stats/market-place'

module.exports = function (token, date, cb) {
  var sDate = date.replace(/-/g, '')

  var url = urlBase + '?token=' + token
  url += '&group=zone'
  url += '&start=' + sDate
  url += '&end=' + sDate

  jsonist.get(url, function (err, body, res) {
    if (err) return cb(err)
    if (res.statusCode >= 400) {
      return cb(new Error(['statusCode', res.statusCode, url].join(' ')))
    }

    var rows = (body || {}).results
    cb(null, rows)
  })
}
