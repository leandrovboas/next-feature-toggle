export default (req, res) => {
  res.status(200).json(
    process.env.FEATURE_DISABLED
)
}