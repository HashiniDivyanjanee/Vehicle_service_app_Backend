const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async (req, res) => {
    const phone = req.query.phone;
    const [rows] = await db.execute('SELECT Cust_ID, Cust_Name FROM customer where Phone = ?', [phone]);
    res.status(200).json({
        message: "Fetched Successfully",
        data: rows,
    })
});

router.post('/', async (req, res) => {
    const { NIC, Cust_Name, Phone, Phone_Land, Email, Address1, Address2, Address3, Date_Of_Birth, Gender, Cus_Group_Name, Remark, Credit_Card_Type, Card_Number, Expiration_date, Credit_Card_Bank, Internal_Notes, Auto_Email_Invoice, Premium_Membership, Loyalty_Enabled, Loyalty_Point, Available_Loyalty_Credit, Earned_Loyalty, Redeemed_Loyalty, Store_Credit_Enabled, Store_Credit_Amount, Account_Balance, Last_Visit, Total_Orders, Total_Spent, Account_Limit, Ref_Emp_ID, Ref_Emp_Name, Cust_VehicleNo } = req.body;
    console.log('Customer:', { NIC, Cust_Name, Phone, Phone_Land, Email, Address1, Address2, Address3, Date_Of_Birth, Gender, Cus_Group_Name, Remark, Credit_Card_Type, Card_Number, Expiration_date, Credit_Card_Bank, Internal_Notes, Auto_Email_Invoice, Premium_Membership, Loyalty_Enabled, Loyalty_Point, Available_Loyalty_Credit, Earned_Loyalty, Redeemed_Loyalty, Store_Credit_Enabled, Store_Credit_Amount, Account_Balance, Last_Visit, Total_Orders, Total_Spent, Account_Limit, Ref_Emp_ID, Ref_Emp_Name, Cust_VehicleNo })
    try {
        const [result] = await db.execute('INSERT INTO customer(NIC, Cust_Name, Phone, Phone_Land, Email, Address1, Address2, Address3, Date_Of_Birth, Gender, Cus_Group_Name, Remark, Credit_Card_Type, Card_Number, Expiration_date, Credit_Card_Bank, Internal_Notes, Auto_Email_Invoice, Premium_Membership, Loyalty_Enabled, Loyalty_Point, Available_Loyalty_Credit, Earned_Loyalty, Redeemed_Loyalty, Store_Credit_Enabled, Store_Credit_Amount, Account_Balance, Last_Visit, Total_Orders, Total_Spent, Account_Limit, Ref_Emp_ID, Ref_Emp_Name, Cust_VehicleNo)VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [NIC, Cust_Name, Phone, Phone_Land, Email, Address1, Address2, Address3, Date_Of_Birth, Gender, Cus_Group_Name, Remark, Credit_Card_Type, Card_Number, Expiration_date, Credit_Card_Bank, Internal_Notes, Auto_Email_Invoice, Premium_Membership, Loyalty_Enabled, Loyalty_Point, Available_Loyalty_Credit, Earned_Loyalty, Redeemed_Loyalty, Store_Credit_Enabled, Store_Credit_Amount, Account_Balance, Last_Visit, Total_Orders, Total_Spent, Account_Limit, Ref_Emp_ID, Ref_Emp_Name, Cust_VehicleNo]);
        res.status(201).json({
            message: 'Customer saved successfully!',
            Cust_ID: result.insertId,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
});

// router.get('/', async (req, res) => {
//     try {
//         const { Phone } = req.query;
//         console.log('Phone parameter:', Phone);

//         if (!Phone) {
//             return res.status(400).json({ error: "Phone parameter is required" });
//         }

//         const [rows] = await db.execute('SELECT Cust_ID, Cust_Name, Phone FROM customer WHERE Phone = ?', [Phone]);

//         const phones = rows.map(row => row.Phone);

//         res.status(200).json({
//             message: "Fetched Successfully",
//             phones: phones,
//         });
//     } catch (error) {
//         console.error('Database Error:', error.message);
//         res.status(500).json({ error: error.message });
//     }
// });


module.exports = router;