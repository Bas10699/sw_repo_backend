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

router.post('/add_item',
    validateUtil.validate_add_item(),
    itemUtil.add_item(),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "เพิ่มรายการสำเร็จ"
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