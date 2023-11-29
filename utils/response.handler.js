export function successHandler(
  res,
  status = 200,
  message = "Successfull",
  data = {}
) {
  return res.status(parseInt(status)).json({ message, data });
}

export function failureHandler(
  res,
  status = 400,
  message = "Failure",
  data = {}
) {
  return res.status(parseInt(status)).json({ message, data });
}
