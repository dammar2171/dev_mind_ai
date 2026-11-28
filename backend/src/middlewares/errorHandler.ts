import { Request,Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";

const errorHandler = (err:Error | AppError ,req:Request,res:Response,next:NextFunction):void =>{
  console.log(`Error -> ${req.method} ${req.url} -> ${err}`);

  if(err instanceof AppError){
    res.status(err.statusCode).json({
      success:false,
      message:err.message,
      data:null
    })
    return;
  }
  res.status(500).json({
    success:false,
    message:"Something went wrong. Please try again later!",
    data:null
  })
}

export default errorHandler;