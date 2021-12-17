export const validateEmail = async (email: any) => {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
};
