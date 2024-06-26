import { errorUnauthenticatedError, errorUnauthorized } from "../errors/index.js";
import { isTokenValid } from "../utils/index.js";

const authenticateUser = async (req, res, next) => {
  try {
    let token;

    // check header 
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer')) {
      token = authHeader.split(' ')[1];
    }

    if (!token) throw new errorUnauthenticatedError('Otentikasi invalid');

    const payload = isTokenValid({ token });

    req.user = {
      email: payload.email,
      role: payload.role,
      name: payload.name,
      organizer: payload.organizer,
      id: payload.userId,
    };

    next();
  } catch (error) {
    next(error);
  }
};


const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new errorUnauthorized('Unauthorized to access this route!');
    }
    next();
  };
};

export { authenticateUser, authorizeRoles };