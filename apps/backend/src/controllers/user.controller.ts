import { RequestHandler } from "express"
import { User } from "../models/users.model";

const registerUser: RequestHandler = async (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const password = req.body.password;
  
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(409).send("User exists")
  }
  const user = await User.create({
    fullName,
    email,
    password
  })
  const userCreated = await User.findById(user._id).select("-password -refreshToken")
  if(!userCreated) {
    res.status(500).send("Something went wrong while creatin user");
  }
  res.status(200).json(userCreated)
}
export { registerUser }