import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";
import { NextFunction, response } from "express";
import catchAsync from "../../utils/catchAsync";

const login = catchAsync(async (req, res) => {
  console.log("from controller", req.body);
  const result = await AuthServices.login(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Login successfully",
    token: result.accessToken,
    data: result.userData,
  });
});

export const AuthControllers = {
  login,
};
