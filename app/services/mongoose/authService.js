import Users from "../../api/v1/users/model.js";
import { requestBadError, errorUnauthorized } from "../../errors/index.js";
import { createTokenUser, createJWT } from "../../utils/index.js";

const signin = async (req) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new requestBadError('Please provide email and password');
  }

  const result = await Users.findOne({ email: email });

  if (!result) throw new errorUnauthorized('Invalid credentials');

  const isPasswordCorrent = await result.comparePassword(password);

  if (!isPasswordCorrent) throw new errorUnauthorized('Invalid credentials');

  const token = createJWT({ payload: createTokenUser(result) });

  return token;
};

export { signin };