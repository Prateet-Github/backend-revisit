class ApiError extends Error {
  constructor (
    statusCode,
    message = 'An unexpected error occurred',
    errors = [],
    stack = '' 
  ){
super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.stack = stack;
    this.success = false;
    this.data = null;

if(stack){

this.stack = stack;

} else {

this.stack = new Error().stack;

}

  }
}

export default ApiError;