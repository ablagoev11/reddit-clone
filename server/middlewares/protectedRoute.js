const protectedRoute = (req, res, next) => {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    next("Not authorized");
  }
};
