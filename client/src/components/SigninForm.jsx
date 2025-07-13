function SigninForm({Title, Para ,Form, Btn, Text}){
    return (
        <div className="forms">
             <div className="forms-header">
                 <h2>{Title}</h2>
                 <p className="forms-description">{Para}</p>
             </div>
             <label htmlFor="email">Email</label>
             <input type="email" name="email" id="email" className="forms-input" />
             
             <label htmlFor="password">Password</label>
             <input type="password" name="email" id="email" className="forms-input" />

                <button type="submit" className="forms-btn">LOGIN</button>
                      <p className="forms-acct">Don't have an account yet?</p>
                       
             {Form}
        </div>
    );
}
export default SigninForm;