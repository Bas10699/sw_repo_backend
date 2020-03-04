const db = require('../connect/db_connect')

exports.get_calender_all = () => {
    return (req, res, next) => {
        let sql = 'SELECT * From calendar_notes'
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
        }
        db.query('INSERT INTO calendar_notes set ? ', obj, (err) => {
            if (err) throw err;
            else {
                next();
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