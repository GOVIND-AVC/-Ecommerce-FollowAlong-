const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];
    console.log(token)
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: "Unauthorized" });
            }
            req.user = decoded.userID;
            next();
        });
    } else {
        return res.status(403).send({ message: "No token provided" });
    }
};

module.exports = authentication;