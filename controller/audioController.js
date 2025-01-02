const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const router = express.Router();

router.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../Audio_folder');
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('audio/')) {
    cb(null, true);
  } else {
    cb(new Error('Only audio files are allowed'), false);
  }
};

const upload = multer({ storage, fileFilter });

router.post('/', (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.error(`Multer Error: ${err.message}`);
      return res.status(500).json({ error: `Multer Error: ${err.message}` });
    } else if (err) {
      console.error(`Error: ${err.message}`);
      return res.status(400).json({ error: `Error: ${err.message}` });
    }

    if (!req.file) {
      console.error('No file uploaded or invalid file format');
      return res.status(400).json({ error: 'No file uploaded or invalid file format' });
    }

    console.log('File uploaded successfully');
    res.status(200).json({ message: 'File uploaded successfully' });
  });
});

module.exports = router;
