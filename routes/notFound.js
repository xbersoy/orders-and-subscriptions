const router = require('express').Router();
const { NotFound } = require('../util/errorTypes')

router.use((req, res, next) => {
  next(new NotFound('Route does not exist'))
});

module.exports = router;