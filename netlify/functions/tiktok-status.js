exports.handler = async () => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify({
      connected: !!process.env.TIKTOK_ACCESS_TOKEN,
      has_access_token: !!process.env.TIKTOK_ACCESS_TOKEN,
      has_open_id: !!process.env.TIKTOK_OPEN_ID,
      has_refresh_token: !!process.env.TIKTOK_REFRESH_TOKEN,
      open_id_preview: process.env.TIKTOK_OPEN_ID ? process.env.TIKTOK_OPEN_ID.slice(0,15)+'...' : null,
      message: process.env.TIKTOK_ACCESS_TOKEN ? '✅ مربوط بنجاح مع تيك توك - جاهز للنشر' : '❌ لم يتم الربط بعد'
    }, null, 2)
  };
};
