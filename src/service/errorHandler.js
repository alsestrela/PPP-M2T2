function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || 'Erro interno do servidor.',
    details: err.details || undefined
  });
}

module.exports = { errorHandler };