export default function (err, req, res, next) {
  console.log(err);
  const statusCode = err.code || 401
  res.status(statusCode).json({error: err.message})
}