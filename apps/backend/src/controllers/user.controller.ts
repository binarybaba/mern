import { RequestHandler } from "express"

const registerUser: RequestHandler = async (req, res) => {
  res.status(200).json({
    "message": "ok"
  })
}
export { registerUser }