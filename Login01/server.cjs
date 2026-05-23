// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());

// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });

// app.listen(8080, () => console.log('API is running on http://localhost:8080'));
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());

app.use('/login', (req, res) => {
  const token = jwt.sign(
    { user: "testUser" },     // payload
    "SECRET123",              // klucz (zmień w produkcji)
    { expiresIn: "2m" }       // czas ważności
  );

  res.send({ token });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080'));

