import { useContext, useState } from "react";
import { createUserDocumentFromAuth,createrAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../components/context/user.context";


interface FormFields{
    displayName:string,
    email:string,
    password:string,
    confirmPassword:string,
}
const defaultFormFields:FormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
    const {setCurrentUser}:any=useContext(UserContext);
  const handleSubmit=async(event:any)=>{
    event.preventDefault();
    if(password!==confirmPassword){
        alert("passwords do not match");
        return ;
    }
    try{
        const response:any=await createrAuthUserWithEmailAndPassword(email,password);
        await createUserDocumentFromAuth(response,{displayName});
        setCurrentUser(response.user);
        resetFormFields();
    }catch(error:any){
        if(error.code==='auth/email-already-in-use'){
            alert("cannot create user: Email already in use")
        }
        else{
        console.log('user creation encountered error',error);
        }
    }
  }

  const resetFormFields=()=>{
    setFormFields(defaultFormFields);
  }


  const handleChange = (event: any) => {
    const { name, value } = event.target;
    console.log(event);
    setFormFields({ ...formFields, [name]: value });
  };

  

  return (
    <div className="text-center h-full p-10 mt-5">
      <h1 className="mb-8 text-3xl text-center">Sign up with your email and password</h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="text"
                required
                placeholder="Display Name"
                onChange={handleChange}
                name="displayName"
                value={displayName}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="email"
                required
                onChange={handleChange}
                name="email"
                placeholder="Email"
                value={email}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="password"
                required
                onChange={handleChange}
                name="password"
                placeholder="Password"
                value={password}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="password"
                required
                onChange={handleChange}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
              />
            </div>
          </div>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-center"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;