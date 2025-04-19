const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Tệp tĩnh (CSS, JS,...)
app.use(express.static('public'));

// Route chính
app.get('/', (req, res) => {
  res.render('index', { message: 'Xin chào từ Render + Express + EJS!' });
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
