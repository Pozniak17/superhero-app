export const validateBody = (schema) => {
  return (req, res, next) => {
    // Якщо multer не знайшов даних, req.body може бути порожнім
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    next();
  };
};
