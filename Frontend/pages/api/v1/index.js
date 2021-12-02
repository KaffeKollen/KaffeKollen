const handler = (req, res) => {
  res.json({
    status: 'success',
    data: {
      message: 'Welcome to the API',
    },
  });
}

export default handler;