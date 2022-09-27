// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const accessCode = process.env.NEXT_PUBLIC_ACCESS_CODE
  const { code } = req.headers

  if (code === accessCode)
    res.status(200).json({ status: 200, message: 'Access Granted' })
  else res.status(401).json({ status: 401, message: 'Access Denied' })
}
