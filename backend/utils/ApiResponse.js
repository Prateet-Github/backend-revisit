class ApiResponse {
  
  constructor(
    statusCode,
    message = 'Request was successful',
    data
  
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.errors = errors;
    this.success = statusCode < 400;
  } 
  }
export default ApiResponse;