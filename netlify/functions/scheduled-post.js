const { schedule } = require('@netlify/functions');

const handler = async () => {
  console.log("🚀 نشر تلقائي...");
  // هون بيستدعي نفس كود النشر اللي عندك
  const response = await fetch('https://inspiring-mooncake-f04248.netlify.app/.netlify/functions/tiktok-post', {
    method: 'POST'
  });
  const result = await response.json();
  console.log(result);
  return { statusCode: 200, body: JSON.stringify({ message: "تم النشر التلقائي", result }) };
};

exports.handler = schedule("@daily", handler); // كل 24 ساعة
// اذا بدك كل ساعة غيّرها لـ "@hourly"
// اذا بدك كل دقيقة للتجربة غيّرها لـ "* * * * *"
