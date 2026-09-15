exports.handler = async () => {
  console.log("🚀 نشر تلقائي كل 24 ساعة");
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, time: new Date().toISOString() })
  };
};
