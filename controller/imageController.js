const multer = require('multer');
const path = require('path');
const express = require('express');
const fs = require('fs');

const router = express.Router();

// Ensure the 'uploads' folder exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir); // Create folder if it doesn't exist
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Use the 'uploads' folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
router.post('/', upload.array('files'), (req, res) => {
    try {
      // Log the files for debugging
      console.log('Uploaded files:', req.files);
  
      // Check if files are uploaded
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No files uploaded. Please check your form-data key or attach files.' });
      }
  
      // Return file paths
      const filePaths = req.files.map(file => file.path);
      res.status(200).json({ filePaths });
    } catch (error) {
      console.error('Error uploading files:', error);
      res.status(500).json({ message: 'File upload failed', error: error.message });
    }
  });
  
module.exports = router;
