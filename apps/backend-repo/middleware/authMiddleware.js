export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token || token !== "Bearer VALID_TOKEN") {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }
    next();
};
