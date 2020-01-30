export const isEmail = email => {
  const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  console.log(emailRegex.test(email));
  return emailRegex.test(email);
};

export const isValidation = email => {
  if (!isEmail(email)) {
    return { success: false, error: "email Error!" };
  } else {
    return { success: true, error: null };
  }
};
