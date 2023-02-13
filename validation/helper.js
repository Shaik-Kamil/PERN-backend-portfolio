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

const checkImage = (req, res, next) => {
  const urlStarts = req.body.image.slice(0, 8);
  if (!req.body.image.length > 0) {
    return next();
  }
  if (urlStarts !== 'https://') {
    res.status(400).json({ error: 'image must have a https:// ' });
  } else {
    next();
  }
};

module.exports = { checkTitle, checkBoolean, checkImage };
