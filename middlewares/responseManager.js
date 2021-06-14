const {GeneralError, NotFound} = require('../util/errorTypes');
const errorMessages = require('../util/messages');

module.exports.async = (req, res, next, promise) => {
  promise
    .then(responseData => {
      if(responseData.length != 0) {
        res.status(200).json(responseData);
      } else {
        return res.status(403).json({
          message: errorMessages.NO_DATA
        });
      }
    })
    .catch(err => {
      if (err instanceof GeneralError) {
        return res.status(err.getStatusCode()).json({
          message: err.message
        });
      }
      return res.status(500).json({
        message: errorMessages.SERVER_ERROR
      });
    });
};