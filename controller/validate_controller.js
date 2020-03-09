var errorMessages = require('../const/error_message')


exports.validate_add_item = () => {
    return (req, res, next) => {

        if (req.body.item_name &&
            req.body.item_brand &&
            req.body.item_gen &&
            req.body.item_status &&
            req.body.item_series_number &&
            req.body.item_type &&
            req.body.item_place_of_birth &&
            req.body.item_date_of_birth&&
            req.body.item_airport&&
            req.body.item_airport_date&&
            req.body.item_notes) {
            next();
        }
        else {
            res.status(200).json(errorMessages.invalid_data)
        }
    }
}

exports.validate_update_item = () => {
    return (req, res, next) => {

        if (req.body.item_id &&
            req.body.item_name &&
            req.body.item_brand &&
            req.body.item_gen &&
            req.body.item_status &&
            req.body.item_series_number &&
            req.body.item_type &&
            req.body.item_place_of_birth &&
            req.body.item_date_of_birth&&
            req.body.item_airport&&
            req.body.item_airport_date) {
            next();
        }
        else {
            res.status(200).json(errorMessages.invalid_data)
        }
    }
}


exports.validate_update_type = () => {
    return (req, res, next) => {

        if (req.body.TN_id &&
            req.body.TN_name 
            ) {
            next();
        }
        else {
            res.status(200).json(errorMessages.invalid_data)
        }
    }
}




exports.validate_add_canlender = () => {
    return (req, res, next) => {
        if (req.body.cn_date &&
            req.body.cn_time &&
            req.body.cn_notes) {
            next();
        }
        else {
            res.status(200).json(errorMessages.invalid_data)
        }
    }
}

exports.validate_add_typeName = () => {
    return (req, res, next) => {
        if (req.body.TN_name) {
            next();
        }
        else {
            res.status(200).json(errorMessages.invalid_data)
        }
    }
}
