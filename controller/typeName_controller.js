const db = require('../connect/db_connect')

exports.get_typeName_select = () => {
    return (req, res, next) => {
        let sql = 'SELECT * FROM typename'
        db.query(sql, (err, result) => {
            if (err) throw err;
            else {
                req.result = result
                next();
            }
        })
    }
}

exports.get_typeName = () => {
    return (req, res, next) => {
        let sql = 'SELECT TN_name,COUNT(item_store.item_id) AS count_id FROM `typename` LEFT JOIN item_store ON item_store.item_type = typename.TN_id GROUP BY TN_id'
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
        console.log(req.body)
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

exports.delete_typeName = () =>{
    return(req,res,next)=>{
        const  TN_id = req.body.TN_id
        db.query("DELETE FROM typename WHERE TN_id = ?",TN_id,(err)=>{
            if (err) throw err;
            else {
                next();
            }
        })
    }
}