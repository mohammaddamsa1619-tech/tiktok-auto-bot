export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { video_url } = req.body;

  if (!video_url) {
    return res.status(400).json({ error: 'video_url is missing' });
  }

  res.status(200).json({ ok: true, message: "started" });

  try {
    console.log("Processing video:", video_url);
  } catch (error) {
    console.error("Error:", error);
  }
}
