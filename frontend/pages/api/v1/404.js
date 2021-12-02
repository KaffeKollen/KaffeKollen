export default function Custom404() {
  return res.json({
    status: 'fail',
    data: {
      message: 'Welcome to the API',
    },
  });
}