const express = require('express');
const db = require('../config/db');

const router = express.Router();

router.post('/', async (req, res) => {
    const { Job_Number, Cust_ID, Vehicle_Type, Brand, Model, License_Plate, Mileage, Job_Type, Date, Time, Assigned_emp_Id, Current_Status, Current_Location, job_barcode, Job_Name1, Job_Name2, CreateDate, CreateTime, Invoice_ID, Scheduled_Date, Scheduled_Time, Customer_Note, Office_Note, Additional_Remark, Additional_RefNo, Created_Emp_ID, AddKm, NewMileage, InsuranceClaim, Year, Color, Sub_Total, Extra_Tax, Extra_Tax_Percentage, Extra_Discount, Extra_Disc_Percentage, Advanced_Amount, Advanced_Method, Net_Total, Net_Total_Without_Advanced, Paid_Amount, Due_Amount, Change_Amount, Payment_Methods, Payment_Status, Cust_Name, Cust_Phone, FuelLevel, EstimateAmount, ShortName, Display_Status, Job_Priority, Job_Category_Type, Cust_VehicleNo } = req.body;

    console.log('JobCard Data:', { Job_Number, Cust_ID, Vehicle_Type, Brand, Model, License_Plate, Mileage, Job_Type, Date, Time, Assigned_emp_Id, Current_Status, Current_Location, job_barcode, Job_Name1, Job_Name2, CreateDate, CreateTime, Invoice_ID, Scheduled_Date, Scheduled_Time, Customer_Note, Office_Note, Additional_Remark, Additional_RefNo, Created_Emp_ID, AddKm, NewMileage, InsuranceClaim, Year, Color, Sub_Total, Extra_Tax, Extra_Tax_Percentage, Extra_Discount, Extra_Disc_Percentage, Advanced_Amount, Advanced_Method, Net_Total, Net_Total_Without_Advanced, Paid_Amount, Due_Amount, Change_Amount, Payment_Methods, Payment_Status, Cust_Name, Cust_Phone, FuelLevel, EstimateAmount, ShortName, Display_Status, Job_Priority, Job_Category_Type, Cust_VehicleNo });

    try {
        const [result] = await db.execute(
            'INSERT INTO a_job_card (Job_Number, Cust_ID, Vehicle_Type, Brand, Model, License_Plate, Mileage, Job_Type, Date, Time, Assigned_emp_Id, Current_Status, Current_Location, job_barcode, Job_Name1, Job_Name2, CreateDate, CreateTime, Invoice_ID, Scheduled_Date, Scheduled_Time, Customer_Note, Office_Note, Additional_Remark, Additional_RefNo, Created_Emp_ID, AddKm, NewMileage, InsuranceClaim, Year, Color, Sub_Total, Extra_Tax, Extra_Tax_Percentage, Extra_Discount, Extra_Disc_Percentage, Advanced_Amount, Advanced_Method, Net_Total, Net_Total_Without_Advanced, Paid_Amount, Due_Amount, Change_Amount, Payment_Methods, Payment_Status, Cust_Name, Cust_Phone, FuelLevel, EstimateAmount, ShortName, Display_Status, Job_Priority, Job_Category_Type, Cust_VehicleNo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [Job_Number, Cust_ID, Vehicle_Type, Brand, Model, License_Plate, Mileage, Job_Type, Date, Time, Assigned_emp_Id, Current_Status, Current_Location, job_barcode, Job_Name1, Job_Name2, CreateDate, CreateTime, Invoice_ID, Scheduled_Date, Scheduled_Time, Customer_Note, Office_Note, Additional_Remark, Additional_RefNo, Created_Emp_ID, AddKm, NewMileage, InsuranceClaim, Year, Color, Sub_Total, Extra_Tax, Extra_Tax_Percentage, Extra_Discount, Extra_Disc_Percentage, Advanced_Amount, Advanced_Method, Net_Total, Net_Total_Without_Advanced, Paid_Amount, Due_Amount, Change_Amount, Payment_Methods, Payment_Status, Cust_Name, Cust_Phone, FuelLevel, EstimateAmount, ShortName, Display_Status, Job_Priority, Job_Category_Type, Cust_VehicleNo]
        );

        res.status(201).json({
            message: 'JobCard saved successfully!',
            auto_id: result.insertId,
        });
    } catch (error) {
        console.error('Database Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
