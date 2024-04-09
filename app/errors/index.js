import CustomAPIError from "./custom-api-error.js";
import BadRequest from "./bad-request.js";
import NotFound from "./not-found.js";

const requestBadError = BadRequest;
const APICustomError = CustomAPIError;
const errorNotFound = NotFound;

export { APICustomError, requestBadError, errorNotFound };