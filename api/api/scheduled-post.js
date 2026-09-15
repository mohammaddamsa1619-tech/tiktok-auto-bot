export default function handler(req, res) {
  console.log("🚀 نشر تلقائي - Vercel Cron");
  return res.status(200).json({ ok: true, message: "Cron working daily at 9AM" });
}
