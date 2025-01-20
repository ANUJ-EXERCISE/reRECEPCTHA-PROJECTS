const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;  // Port 3000 use karo

// Static files serve karne ke liye
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
