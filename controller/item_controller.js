const db = require('../connect/db_connect')

exports.get_item_all = () => {
    return (req, res, next) => {
        let sql = 'SELECT * From item_store'
        db.query(sql, (err, result) => {
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