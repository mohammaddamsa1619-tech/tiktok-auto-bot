export default function handler(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  return res.status(200).json({connected:true,status:"مربوط بنجاح ✅",platform:"Vercel"});
}
