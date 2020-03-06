const db = require('../connect/db_connect')

exports.get_airport = () => {
    return (req, res, next) => {
        let sql = 'SELECT ap_id,ap_name,COUNT(item_store.item_id) AS count_item FROM `airport`LEFT JOIN item_store ON airport.ap_id = item_store.item_airport GROUP BY ap_id'
        db.query(sql, (err, result) => {
            if (err) throw err;
            else {
                req.result = result
                next();
            }
        })
    }
}

exports.get_airport_select = () => {
    return (req, res, next) => {
        let sql = 'SELECT * FROM airport'
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
        console.log(req.body)
        let obj = {
            ap_name: req.body.ap_name
        }
        db.query('INSERT INTO airport SET ?', obj, (err, result) => {
            if (err) throw err;
            else {
                req.result = result
                next();
            }
        })
    }
}