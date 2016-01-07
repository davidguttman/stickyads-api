# stickyads-api #

A simple module for accessing stickyads report data.

## Example ##

```js
var sa = require('stickyads-api')

var token = 'abcdef0123456789'

var date = '2016-01-01'

sa(token, date, function (err, rows) {
  if (err) return console.error(err)

  console.log('revenue data', rows)
})

```

# License #

MIT
