import { Request, Response, NextFunction } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization;

  if (!token || token !== "Bearer VALID_TOKEN") {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  next();
}