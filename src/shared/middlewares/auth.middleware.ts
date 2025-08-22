import { UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

export class AuthMiddleware {
     use(req: Request, res: Response, next: NextFunction){
const authHeader = req.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Token não informado');
    }

    const token = authHeader.split(' ')[1];

    if (!token || token !== process.env.JWT_SECRET) {
      throw new UnauthorizedException('Token inválido');
    }

    next(); 
  }
        
}