export default function (req, res) {
  res.status(200).json({ name: 'Example user [id].js', id: req.query.id })
}