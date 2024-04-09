import CustomAPIError from './custom-api-error.js';
import StatusCodes from 'http-status-codes';

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    // memberikan statusCodes bad request
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequest;