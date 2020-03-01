const db = require('../connect/db_connect')

exports.get_typeName = () => {
    return (req, res, next) => {
        let sql = 'SELECT COUNT(item_id) AS count_item, item_type FROM item_store GROUP BY item_type'
        db.query(sql, (err, result) => {
            if (err) throw err;
            else {
                req.result = result
                next();
            }
        })
    }
}

exports.add_typeName = () =>{
    return(req,res,next)=>{
        const obj ={
            TN_name : req.body.TN_name
        }
        db.query("INSERT INTO typename SET ?",obj,(err)=>{
            if (err) throw err;
            else {
                next();
            }
        })
    }
}