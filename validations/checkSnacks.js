const validateURL = (req, res, next) => {
    if (
      req.body.image.substring(0, 7) === "http://" ||
      req.body.image.substring(0, 8) === "https://"
    ) {
      return next();
    } else {
      res
        .status(400)
        .json({ error: "You forgot to start your url with http:// or https://" });
    }
  };

  module.exports = { validateURL }