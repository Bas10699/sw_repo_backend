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