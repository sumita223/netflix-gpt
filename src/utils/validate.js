

export const checkValidData=(email,password)=>{
    const isEmailValid= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^.{4,}$/.test(password);
  

    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";
   
    return null;
}