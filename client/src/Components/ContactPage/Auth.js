export const isEmail = email => {
  const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  console.log("정규식 검사", emailRegex.test(email));
  return emailRegex.test(email);
};

export const isValidation = email => {
  if (!isEmail(email) || email === null || email === "") {
    return { success: false, error: "유효한 이메일이 아닙니다." };
  } else {
    return { success: true, error: null };
  }
};
