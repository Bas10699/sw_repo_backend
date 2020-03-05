const db = require('../connect/db_connect')

exports.get_item_all = () => {
    return (req, res, next) => {
        let sql = 'SELECT * From item_store LEFT JOIN typename ON item_store.item_type = typename.TN_id'
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
        let sql = 'SELECT * From item_store WHERE item_id = ?'
        db.query(sql, item_id, (err, result) => {
            if (err) throw err;
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
            item_date_of_birth: req.body.item_date_of_birth,
            item_place_of_birth: req.body.item_place_of_birth,
        }
        const item_image = req.body.item_image
        console.log(obj, req.body.item_id)
        db.query('UPDATE item_store SET ? WHERE item_id=?', [obj, req.body.item_id], (err) => {
            if (err) throw err;
            else {
                if (item_image) {
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
        let sql = 'SELECT COUNT(item_status) AS count_status, item_status FROM item_store GROUP BY item_status ORDER BY COUNT(item_status) DESC;'
        db.query(sql, (err, result) => {
            if (err) throw err;
            else {
                req.result = result
                next();
            }
        })
    }
}

