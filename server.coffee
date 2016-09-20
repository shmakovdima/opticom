express = require('express');
app = express();


app.set 'port', (process.env.PORT || 3000)
app.use '/', express.static(__dirname)

app.use "/static", express.static("dist")


app.set "views", "app/views"
app.set 'view engine', 'jade'


app.get '/', (req, res) ->
  res.render "index"


app.listen app.get('port'), ()->
  console.log 'Server started: http://localhost:' + app.get('port') + '/'