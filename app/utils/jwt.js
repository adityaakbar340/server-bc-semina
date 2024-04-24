import jwt from 'jsonwebtoken';
import configEnv from './config.js';

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, configEnv.jwtSecret, {
    expiresIn: configEnv.jwtExpiration
  });

  return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, configEnv.jwtSecret);

export { createJWT, isTokenValid };