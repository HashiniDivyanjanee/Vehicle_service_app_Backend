const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT Section, Prefix, LatestID FROM primarykey_settings where Section = "JOB CARD"');


        res.status(200).json({
            message: "Fetched Successfully",
            data: rows,
        })
    } catch (error) {
        console.error('Database Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

router.put('/', async (req, res) => {
    const { LatestID } = req.body;

    // Validate the request body
    if (!LatestID) {
        return res.status(400).json({ error: 'LatestID is required' });
    }

    try {
        // Correctly pass parameters to the query
        const [result] = await db.execute(
            'UPDATE primarykey_settings SET LatestID = ? WHERE Section = "JOB CARD"',
            [LatestID]
        );

        if (result.affectedRows > 0) {
            res.status(200).json({
                message: 'Updated Successfully',
            });
        } else {
            res.status(404).json({ error: 'Section not found or no changes made' });
        }
    } catch (error) {
        console.error('Database Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
