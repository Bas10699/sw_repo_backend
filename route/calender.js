const express = require('express')
const router = express.Router()
const calenderUtil = require('../controller/calender_controller')
const validate = require('../controller/validate_controller')

router.get('/get_calender_all',
    calenderUtil.get_calender_all(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        })
    })

router.post('/add_canlender',
    validate.validate_add_canlender(),
    calenderUtil.add_calender(),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "เพิ่มข้อมูลเรียบร้อย"
        })
    })
router.post('/delete_canlender',
    calenderUtil.delete_calender(),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "ลบอมูลสำเร็จ"
        })
    })

module.exports = router