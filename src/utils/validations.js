export const required = (value) => (value ? undefined : 'Required');
export const isNumber = (value) =>
  isNaN(value) ? 'Must be a number' : undefined;
export const isEmail = (value) =>
  !value.match(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/g)
    ? 'Must be a valid e-mail address'
    : undefined;
export const minLength = (min) => (value) =>
  value.length >= min ? undefined : `Should be greater than ${min} characters`;
export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
