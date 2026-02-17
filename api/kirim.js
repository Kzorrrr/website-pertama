export default function handler(req, res) {
  if (req.method === "POST") {
    const { nama } = req.body;

    res.status(200).json({
      message: `Halo ${nama}`
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
