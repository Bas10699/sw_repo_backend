const db = require('../connect/db_connect')
const moment = require('moment')
exports.get_item_all = () => {
    return (req, res, next) => {
        let sql = 'SELECT *,ap_name AS item_airport, TN_name AS item_type From item_store LEFT JOIN typename ON item_store.item_type = typename.TN_id LEFT JOIN  airport ON item_store.item_airport = airport.ap_id ORDER BY item_id DESC'
        db.query(sql, (err, result) => {
            if (err) throw err;
            else {
                req.result = result
                next();
            }
        })
    }
}

exports.get_item = () => {
    return (req, res, next) => {
        const item_id = req.body.item_id
        console.log(item_id)
        let sql = 'SELECT * From item_store LEFT JOIN typename ON item_store.item_type = typename.TN_id LEFT JOIN  airport ON item_store.item_airport = airport.ap_id WHERE item_id = ?'
        db.query(sql, item_id, (err, result) => {
            if (err) throw err;
            if (!result[0]) {
                console.log(result)
                res.status(200).json({
                    error_message: "ตรวจสอบไม่พบ ID"
                })
            }
            else {
                req.result = result[0]
                next();
            }
        })
    }
}
exports.get_item_airport = () => {
    return (req, res, next) => {
        const item_id = req.body.ap_id
        console.log(item_id)
        let sql = 'SELECT * From item_store LEFT JOIN typename ON item_store.item_type = typename.TN_id LEFT JOIN  airport ON item_store.item_airport = airport.ap_id WHERE item_airport = ?'
        db.query(sql, item_id, (err, result) => {
            if (err) throw err;
            if (!result[0]) {
                console.log(result)
                res.status(200).json({
                    error_message: "ตรวจสอบไม่พบอุปกรณ์"
                })
            }
            else {
                req.result = result
                next();
            }
        })
    }
}

exports.get_item_type = () => {
    return (req, res, next) => {
        const item_id = req.body.item_type
        console.log(item_id)
        let sql = 'SELECT * From item_store LEFT JOIN typename ON item_store.item_type = typename.TN_id LEFT JOIN  airport ON item_store.item_airport = airport.ap_id WHERE item_type = ?'
        db.query(sql, item_id, (err, result) => {
            if (err) throw err;
            if (!result[0]) {
                console.log(result)
                res.status(200).json({
                    error_message: "ตรวจสอบไม่พบอุปกรณ์"
                })
            }
            else {
                req.result = result
                next();
            }
        })
    }
}

exports.get_item_brand = () => {
    return (req, res, next) => {
        const item_id = req.body.item_brand
        console.log(item_id)
        let sql = 'SELECT * From item_store LEFT JOIN typename ON item_store.item_type = typename.TN_id LEFT JOIN  airport ON item_store.item_airport = airport.ap_id WHERE item_brand = ?'
        db.query(sql, item_id, (err, result) => {
            if (err) throw err;
            if (!result[0]) {
                console.log(result)
                res.status(200).json({
                    error_message: "ตรวจสอบไม่พบอุปกรณ์"
                })
            }
            else {
                req.result = result
                next();
            }
        })
    }
}

exports.add_item = () => {
    return (req, res, next) => {
        const obj = {
            item_name: req.body.item_name,
            item_series_number: req.body.item_series_number,
            item_type: req.body.item_type,
            item_date_of_birth: req.body.item_date_of_birth,
            item_place_of_birth: req.body.item_place_of_birth,
            item_brand: req.body.item_brand,
            item_gen: req.body.item_gen,
            item_status: req.body.item_status,
            item_airport: req.body.item_airport,
            item_airport_date: req.body.item_airport_date,
            item_image: "item/image/default.png"
        }
        const item_image = req.body.item_image

        db.query('INSERT INTO item_store SET ?', obj, (err, result) => {
            if (err) throw err;
            else {
                if (item_image) {
                    let image = item_image.slice(item_image.indexOf(',') + 1)
                    require("fs").writeFile("./image/item/item_" + result.insertId + '.png', image, 'base64', function (err) {
                        if (err) throw err;
                        else {
                            db.query(`UPDATE item_store SET item_image = 'item/image/item_${result.insertId}.png'  WHERE item_id = ${result.insertId}`, function (err, result) {
                                if (err) throw err;
                                else {
                                    next()
                                }

                            });
                        }
                    });
                }
                else {
                    next();
                }
            }
        })
    }
}

exports.update_item = () => {
    return (req, res, next) => {
        const obj = {
            item_name: req.body.item_name,
            item_brand: req.body.item_brand,
            item_gen: req.body.item_gen,
            item_status: req.body.item_status,
            item_series_number: req.body.item_series_number,
            item_type: req.body.item_type,
            item_date_of_birth: moment(req.body.item_date_of_birth).format("YYYY-MM-DD"),
            item_place_of_birth: req.body.item_place_of_birth,
            item_airport: req.body.item_airport,
            item_airport_date: moment(req.body.item_airport_date).format("YYYY-MM-DD"),
        }
        const item_image = req.body.item_image
        console.log(obj, req.body.item_id)
        db.query('UPDATE item_store SET ? WHERE item_id=?', [obj, req.body.item_id], (err) => {
            if (err) throw err;
            else {
                if (req.body.image_check) {
                    let image = item_image.slice(item_image.indexOf(',') + 1)
                    require("fs").writeFile("./image/item/item_" + req.body.item_id + '.png', image, 'base64', function (err) {
                        if (err) throw err;
                        else {
                            db.query(`UPDATE item_store SET item_image = 'item/image/item_${req.body.item_id}.png'  WHERE item_id = ${req.body.item_id}`, function (err, result) {
                                if (err) throw err;
                                else {
                                    next()
                                }

                            });
                        }
                    });
                }
                else {

                    next();
                }
            }
        })
    }
}

exports.delete_item = () => {
    return (req, res, next) => {
        const item_id = req.body.item_id
        db.query('DELETE FROM item_store WHERE item_id=?', item_id, (err) => {
            if (err) throw err;
            else {
                next()
            }
        })
    }
}

exports.get_item_status = () => {
    return (req, res, next) => {
        let sql = 'SELECT COUNT(item_status) AS count_status, item_status FROM item_store GROUP BY item_status ORDER BY item_status ASC;'
        db.query(sql, (err, result) => {
            if (err) throw err;
            else {
                req.result = result
                next();
            }
        })
    }
}

exports.get_item_brand_count = () => {
    return (req, res, next) => {
        let sql = 'SELECT COUNT(item_brand) AS count_brand, item_brand FROM item_store GROUP BY item_brand ORDER BY item_brand ASC;'
        db.query(sql, (err, result) => {
            if (err) throw err;
            else {
                req.result = result
                next();
            }
        })
    }
}

exports.add_calender = () => {
    return (req, res, next) => {
        console.log(req.body.cn_notes)
        if (req.body.cn_notes) {
            const obj = {
                cn_date: req.body.cn_date,
                cn_time: req.body.cn_time,
                cn_notes: req.body.cn_notes,
                cn_head: req.body.cn_head,
                cn_item_id: req.body.cn_item_id,
                cn_color: 1,
            }
            db.query('INSERT INTO calendar_notes set ? ', obj, (err) => {
                if (err) throw err;
                else {
                    next();
                }
            })
        } else {
            next()
        }

    }
}
