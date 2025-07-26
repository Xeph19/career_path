import { useState } from "react";

//props
function LoginForm({
    title, 
    para, 
    btn, 
    text, 
    Nameplaceholder,
    Emailplaceholder, 
    Passwordplaceholder,
    showEmailField = true
  }
) 
    {
      //validation
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [message, setMessage] = useState("");
       
     //prevents the page from refreshing when the form is submitted
     const handleSubmition = (e) => {
        e.preventDefault();

         if (!name || !password || (showEmailField && !email)) {
             setMessage("Please fill in all required fields.");
             return;
        }
        if(showEmailField && (!email.includes("@") || !email.includes("."))){
            setMessage("Please input vaid Email Address");
            return;
        }
        if(password.length < 6){
            setMessage("Please make password 6 characters long");
            return;
        }
          setMessage(`${btn} successful!`);
     }
return  (
    <>
    <div className="form-group">
        <h1 className="form-title">{title}</h1>
        <p className="form-para">{para}</p>
        
          <input 
          type="text"
          className="input-form" 
           value={name} 
            onChange={(e) => setName(e.target.value)} 
             placeholder={Nameplaceholder}/>

             {/*renders elements based on a boolean condition., if boolean is true it shows else, not*/}
            {showEmailField && (
             <input
               type="email"
                 className="input-form" 
                value={email}
                 onChange={(e) => setEmail(e.target.value)}
                   placeholder={Emailplaceholder}
               />
             )}

            <input 
              type="password" 
                value={password} 
                  className="input-form" 
                 onChange={(e) => setPassword(e.target.value)} 
                  placeholder={Passwordplaceholder}/>
       
             <button 
               type="submit" 
                className="form-btn" 
                 onClick={handleSubmition}>
                {btn}
             </button>

         <p>{text}</p>
        <p className="form-acc">{message}</p>
    </div>
    </>
);

}
export default LoginForm;