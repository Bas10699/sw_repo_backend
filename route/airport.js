const express = require("express");
const router = express.Router();
const airportUtil = require("../controller/airport_controller");
const validateUtil = require("../controller/validate_controller");

router.get("/get_airport",
    airportUtil.get_airport(),
    (req, res) => {
        res.status(200).json({
            success: true,
            result: req.result
        });
    });

router.post("/add_airport",
    // validate.validate_add_canlender(),
    airportUtil.add_airport(),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "เพิ่มข้อมูลเรียบร้อย"
        });
    }
);

router.post('/update_airport',
    validateUtil.validate_update_airport(),
    airportUtil.update_airport(),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "เเก้ไขชื่อสำเร็จ"
        })
    })

router.post("/delete_airport",
    // validate.validate_add_canlender(),
    airportUtil.delete_airport(),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "ลบข้อมูลเรียบร้อย"
        });
    }
);
module.exports = router;
