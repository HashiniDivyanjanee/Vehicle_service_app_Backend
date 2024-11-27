const express = require('express');
const jobCardRoutes = require('./controller/jobCardController'); 
const pkeysetting = require('./controller/primarykey_settingController'); 

const app = express();
app.use(express.json());


app.use('/api/jobcard', jobCardRoutes);
app.use('/api/primarykeysetting', pkeysetting);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
