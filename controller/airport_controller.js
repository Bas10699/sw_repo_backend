const db = require('../connect/db_connect')

exports.get_airport = () => {
    return (req, res, next) => {
        let sql = 'SELECT * FROM `location_install`'
        db.query(sql, (err, result) => {
            if (err) throw err;
            else {
                req.result = result
                next();
            }
        })
    }
}

exports.add_airport = () => {
    return (req, res, next) => {
        let obj = {
            li_name: req.boby.li_name
        }
        db.query('INSERT INTO location_install SET li_id = ?', obj, (err, result) => {
            if (err) throw err;
            else {
                req.result = result
                next();
            }
        })
    }
}