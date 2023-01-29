const checkBoolean = (req, res, next) => {
    if (
      req.body.is_healthy === true ||
      req.body.is_healthy === false ||
      req.body.is_healthy === undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "is_healthy should be true or false" });
    }
  };
  
  module.exports = {checkBoolean}