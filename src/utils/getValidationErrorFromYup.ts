import { info } from 'console';
import { ValidationError } from 'yup';

// validationError {
//   key: info;
// }

interface Errors {
  [key: string]: string;
}

export default function getValidationErrorsFromYup(
  err: ValidationError,
): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[`${error.path}`] = error.message;
  });

  return validationErrors;
}
