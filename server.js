const express = require('express');
const jobCardRoutes = require('./controller/jobCardController'); 
const pkeysetting = require('./controller/primarykey_settingController'); 
const customers = require('./controller/customerController'); 
const app = express();
app.use(express.json());


app.use('/api/jobcard', jobCardRoutes);
app.use('/api/primarykeysetting', pkeysetting);
app.use('/api/customer', customers);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
