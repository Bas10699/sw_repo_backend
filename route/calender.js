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

router.post('/add_calender',
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

router.post('/get_calender_data',
    calenderUtil.get_calender_data(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        })
    })
router.get('/get_calender_itemName',
    calenderUtil.get_calender_itemName(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        })
    })

module.exports = router