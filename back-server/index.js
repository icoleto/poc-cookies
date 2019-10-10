const express = require('express');
var cors = require('cors')

const app = express();
const PORT = process.env.PORT = 3000;
app.use(express.static('public'));
app.use(cors())


app.get('/cookies', function (req, res) {
  if (req.cookies) {
    res.cookie('cookieName', 'cookieValue')
    res.send('Hi first time from Back!')
  }
  else {
    console.log(req.cookies)
    res.send(`Hi ${req.cookies}  time from Back!`)
  }
}
);

app.listen(PORT, () => {
  console.log('Server is running at:', PORT);
});
