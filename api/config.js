module.exports = (req, res) => {
  res.status(200).json({
    clientToken: process.env.NEXT_PUBLIC_DD_CLIENT_TOKEN,
    applicationId: process.env.NEXT_PUBLIC_DD_APPLICATION_ID,
  });
};