'use strict';

module.exports = (err, req, res, next) => {
    // Set the response status based on the error type
    if (res.headersSent) {
        return next(err);
    }
    
    // Log the error if needed
    console.error(err);
    
    // Sending generic error response
    return res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
};