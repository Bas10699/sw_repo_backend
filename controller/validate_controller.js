var errorMessages = require('../const/error_message')


exports.validate_add_item = () => {
    return (req, res, next) => {

        if (req.body.item_name &&
            req.body.item_series_number &&
            req.body.item_type &&
            req.body.item_place_of_birth &&
            req.body.item_date_of_birth) {
            next();
        }
        else {
            res.status(200).json(errorMessages.invalid_data)
        }
    }
}