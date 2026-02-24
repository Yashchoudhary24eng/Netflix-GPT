
export const validationCheck = (email,password) =>{

    const Email = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const Password = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    if(email=== "") return "please Enter email ID";
    if(password=== "") return "please Enter password";
    if(!Email) return "Email Is Invalid!";
    if(!Password) return "Password In Invalid!";

  
    
    return null;

}