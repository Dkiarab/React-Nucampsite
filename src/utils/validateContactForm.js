export const validateContactForm = (values) => {
  const errors = {};

  if (!values.firstName && !values.lastName) {
    errors.firstName = "Required";
    errors.lastName = "Required";
  } else if (values.firstName.length && values.lastName.length < 2) {
    errors.firstName = "Must be at least 2 characters.";
    errors.lastName = "Must be at least 2 characters.";
  } else if (values.firstName.length && values.lastName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
    errors.lastName = "Must be 15 characters or less";
  }

  const reg = /^\d+$/;
  if (!reg.test(values.phoneNum)) {
    errors.phoneNum = "The phone number should contain only numbers.";
  }

  if (!values.email.includes("@")) {
    errors.email = "Email should contain a @";
  }

  return errors;
};
