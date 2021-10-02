// pages/api/book/[slug].js

export default function handler(req, res) {
  const { slug, isbn } = req.query
  res.status(200).json({ slug, isbn })
}
