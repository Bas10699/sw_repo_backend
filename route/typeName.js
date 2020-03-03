const express = require('express')
const router = express.Router()
const typeName = require('../controller/typeName_controller')

router.get('/get_typeName',
    typeName.get_typeName(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        })
    })
router.post('/add_typeName',
    typeName.add_typeName(),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "เพิ่มรายการสำเร็จ"
        })
    })

module.exports = router