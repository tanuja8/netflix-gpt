export const checkValidData =(email,password,name)=>{
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
    const isNamevalid=/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(name);

    if (!isNamevalid) return "Name is not Valid";
    if (!isEmailValid) return "Email id is not Valid";
    if (!isPasswordValid) return "Password is not Valid";

    return null;



}