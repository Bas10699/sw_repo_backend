const express = require('express')
const router = express.Router()
const itemUtil = require('../controller/item_controller')
const validateUtil = require('../controller/validate_controller')

router.get('/get_item_all',
    itemUtil.get_item_all(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        })
    })
router.post('/get_item',
    itemUtil.get_item(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        })
    })
router.post('/get_item_airport',
    itemUtil.get_item_airport(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        })
    })
router.post('/get_item_type',
    itemUtil.get_item_type(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        })
    })
router.post('/get_item_brand',
    itemUtil.get_item_brand(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        })
    })

router.post('/add_item',
    validateUtil.validate_add_item(),
    itemUtil.add_item(),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "เพิ่มรายการสำเร็จ"
        })
    })

router.post('/update_item',
    validateUtil.validate_update_item(),
    itemUtil.add_calender(),
    itemUtil.update_item(),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "เเก้ไขสำเร็จ"
        })
    })


router.get('/get_item_status',
    itemUtil.get_item_status(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        })
    })
router.get('/get_item_brand_count',
    itemUtil.get_item_brand_count(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        })
    })
router.post('/delete_item',
    itemUtil.delete_item(),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "ลบข้อมูลสำเร็จ"
        })
    })

router.get('/image/:id',
    function (req, res) {

        console.log("image", req.params.id)

        require("fs").readFile(__dirname.replace("route", "") + 'image/item/' + req.params.id, (err, data) => {

            if (err !== null) {
                res.sendFile(__dirname.replace("route", "") + 'image/default.png')
            } else {
                res.sendFile(__dirname.replace("route", "") + 'image/item/' + req.params.id)
            }

        })

    })
module.exports = router