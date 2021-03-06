const express = require('express')
const router = express.Router()
const typeName = require('../controller/typeName_controller')
const validateUtil = require('../controller/validate_controller')

router.get('/get_typeName',
    typeName.get_typeName(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        })
    })

router.get('/get_typeName_select',
    typeName.get_typeName_select(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        })
    })

router.post('/add_typeName',
    validateUtil.validate_add_typeName(),
    typeName.add_typeName(),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "เพิ่มรายการสำเร็จ"
        })
    })
router.post('/delete_typeName',
    // validateUtil.validate_add_typeName(),
    typeName.delete_typeName(),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "ลบรายการสำเร็จ"
        })
    })

    router.post('/update_type',
   validateUtil.validate_update_type(),
    typeName.update_type(),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "ลบรายการสำเร็จ"
        })
    })

module.exports = router