const express = require('express')
const router = express.Router()
const calenderUtil = require('../controller/calender_controller')

router.get('/get_calender_all',
    calenderUtil.get_calender_all(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        })
    })

module.exports = router