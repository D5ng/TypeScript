"use strict";
function generateError(message, errorCode) {
    throw {
        message,
        errorCode,
    };
}
generateError("An Error occurred", 500);
