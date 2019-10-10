const express = require('express');
var cors = require('cors')

const app = express();
const PORT = process.env.PORT = 4000;
app.use(express.static('public'));
app.use(cors())

app.listen(PORT, () => {
  console.log('Server is running at:',PORT);
});
