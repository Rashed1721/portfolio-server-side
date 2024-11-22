import httpStatus from "http-status";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLogin } from "./auth.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config";

const login = async (payload: TLogin) => {
  const user = await User.isUserExists(payload?.email);
  console.log({ user });
  const userData = {
    _id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    address: user.address,
  };

  if (!user) {
    throw new Error("not found");
  }
  const passwordMatch = await bcrypt.compare(
    payload?.password,
    user?.password as string
  );
  if (!passwordMatch) {
    throw new Error("You Are Not Authorized!!");
  }

  const jwtpayload = {
    userId: user._id,
    role: user.role,
    email: user.email,
  };

  const accessToken = jwt.sign(
    jwtpayload,
    config.jwt_access_secrect as string,
    {
      expiresIn: config.jwt_access_expires as string,
    }
  );

  return { userData, accessToken };
};

export const AuthServices = {
  login,
};
