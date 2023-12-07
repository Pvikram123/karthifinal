// const fs = require('fs');
// const parseString = require('xml2js').parseString;

// // Read the XML file
// const xmlDataBuffer = fs.readFileSync('C:/Users/DELL/Documents/name.XML');
// const xmlDataString = xmlDataBuffer.toString('utf-8');

// // Parse the XML data
// parseString(xmlDataString, (err, result) => {
//   if (err) {
//     console.error('Error parsing XML:', err);
//     return;
//   }

//   // Extract titles
//   const titles = result.bookstore.book.map(book => book.title);

//   // Print titles
//   console.log('Titles:', titles);
// });
const express = require('express');
const multer = require('multer');
const parseString = require('xml2js').parseString;

const app = express();
const port = 3000;

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('xmlFile'), (req, res) => {
  // Get the uploaded file buffer
  const xmlBuffer = req.file.buffer;

  // Convert the buffer to string
  const xmlDataString = xmlBuffer.toString('utf-8');

  // Parse the XML data
  parseString(xmlDataString, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
      return res.status(500).send('Error parsing XML');
    }

    // Extract titles
    const titles = result.bookstore.book.map(book => book.title);

    // Print titles
    console.log('Titles:', titles);

    // Send a response with titles
    res.json({ titles });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
