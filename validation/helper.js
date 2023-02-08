const checkTitle = (req, res, next) => {
  if (req.body.title) next();
  else res.status(400).json({ error: 'title is required' });
};

const checkBoolean = (req, res, next) => {
  if (
    req.body.is_favorite === true ||
    req.body.is_favorite === false ||
    req.body.is_favorite === undefined
  ) {
    next();
  } else {
    res.status(400).json({ error: 'is_favorite must have a boolean value' });
  }
};
module.exports = { checkTitle, checkBoolean };
