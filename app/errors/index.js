import CustomAPIError from "./custom-api-error.js";
import BadRequest from "./bad-request.js";
import NotFound from "./not-found.js";
import Unauthorized from "./unauthorized.js";
import UnauthenticatedError from "./unauthenticated.js";

const requestBadError = BadRequest;
const APICustomError = CustomAPIError;
const errorNotFound = NotFound;
const errorUnauthorized = Unauthorized;
const errorUnauthenticatedError = UnauthenticatedError;

export { APICustomError, requestBadError, errorNotFound, errorUnauthorized, errorUnauthenticatedError };