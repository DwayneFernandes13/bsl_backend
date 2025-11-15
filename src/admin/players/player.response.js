let response = {
    general_error: {
        message: 'Something went wrong',
        code: 'BSL_001'
    },

    form_field_required: {
        message: 'Form Fields Missing',
        code: 'BSL_002'
    },

    added_success: {
        message: 'Player Added',
        code: 'BSL_003'
    }


}

module.exports = response;
module.exports.success = function (key, values) {
    let returnResponse = response[key] == undefined ? {} : response[key];
    returnResponse.status = true;
    returnResponse.values = values;
    return returnResponse;
}
module.exports.failed = function (key, errors) {
    let returnResponse = response[key] == undefined ? {} : response[key];
    returnResponse.status = false;
    returnResponse.error= errors && errors != key ? errors : ""
    return returnResponse;
}