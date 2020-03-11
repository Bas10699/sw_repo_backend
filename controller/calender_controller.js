const db = require('../connect/db_connect')

exports.get_calender_all = () => {
    return (req, res, next) => {
        let sql = 'SELECT * From calendar_notes ORDER BY `calendar_notes`.`cn_time` ASC'
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
        const obj = {
            cn_date: req.body.cn_date,
            cn_time: req.body.cn_time,
            cn_notes: req.body.cn_notes,
            cn_head: req.body.cn_head,
            cn_item_id: req.body.cn_item_id,
            cn_color: req.body.cn_color,
        }
        db.query('INSERT INTO calendar_notes set ? ', obj, (err) => {
            if (err) throw err;
            else {
                if (req.body.item_status) {
                    const objstatus = {
                        item_status: req.body.item_status
                    }
                    db.query('UPDATE item_store SET ? WHERE item_id=?', [objstatus, req.body.cn_item_id], (err) => {
                        if (err) throw err;

                        next()

                    })
                } else {
                    next();
                }

            }
        })
    }
}


exports.delete_calender = () => {
    return (req, res, next) => {
        const cn_id = req.body.cn_id
        db.query('DELETE FROM calendar_notes WHERE cn_id = ? ', cn_id, (err) => {
            if (err) throw err;
            else {
                next();
            }
        })
    }
}

exports.get_calender_data = () => {
    return (req, res, next) => {
        let date = req.body.date
        db.query('SELECT * From calendar_notes WHERE cn_date = ?', date, (err, result) => {
            if (err) throw err;
            else {
                req.result = result
                next();
            }
        })
    }
}

exports.get_calender_item = () => {
    return (req, res, next) => {
        let cn_item_id = req.body.item_id
        db.query('SELECT * From calendar_notes WHERE cn_item_id = ?', cn_item_id, (err, result) => {
            if (err) throw err;
            else {
                req.result = result
                next();
            }
        })
    }
}

exports.get_calender_itemName = () => {
    return (req, res, next) => {
        db.query('SELECT item_name FROM `item_store` GROUP BY item_name', (err, result) => {
            if (err) throw err;
            else {
                req.result = result
                next();
            }
        })
    }
}