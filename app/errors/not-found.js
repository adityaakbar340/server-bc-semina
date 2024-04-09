import CustomAPIError from './custom-api-error.js';
import StatusCodes from 'http-status-codes';

class NotFound extends CustomAPIError {
  constructor(message) {
    super(message);
    // memberikan statusCodes bad request
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFound;