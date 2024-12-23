const express = require('express');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'D:/Audio_folder');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const fileFilder =(req, file, cb)=>{
  if(file.mimetype.startsWith('audio/')){
    cb(null, true);
  }else{
    cb(new Error('Only audio files are allowed'),false);
  }
}

const upload = multer({ storage: storage , fileFilter: fileFilder});

router.post('/', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded or invalid file format');
  } else {
    res.status(200).send('File uploaded successfully');
  }
  
});

module.exports = router;
