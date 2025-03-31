const sendResponse = (res, status, success, message, data = null) => {
    res.status(status).json({ success, message, data });
};

module.exports = {
    success: (res, message, data) => sendResponse(res, 200, true, message, data),
    created: (res, message, data) => sendResponse(res, 201, true, message, data),
    badRequest: (res, message) => sendResponse(res, 400, false, message),
    unauthorized: (res, message) => sendResponse(res, 401, false, message),
    forbidden: (res, message) => sendResponse(res, 403, false, message),
    notFound: (res, message) => sendResponse(res, 404, false, message),
    error: (res, message, status = 500) => sendResponse(res, status, false, message),
};