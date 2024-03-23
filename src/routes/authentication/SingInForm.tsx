import { useContext, useState } from "react";
import { SignInGoogle } from "./signInGoogleButton";
import { singInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { UserContext} from "../../components/context/user.context";

interface FormFields {
  email: string;
  password:string;
}
const defaultFormFields: FormFields = {
  email: "",
  password:"",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
    const {setCurrentUser}:any=useContext(UserContext);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try{
        const response:any=await singInAuthUserWithEmailAndPassword(email,password);
        setCurrentUser(response.user);
        resetFormFields();
    }catch(error:any){
        switch (error.code){
            case 'auth/wrong-password':
                alert('incorrect password for email');
                break;
            case 'auth/user-not-found':
                alert('incorrect user name');
                break;
            case 'auth/invalid-credential':
                alert('invalid credential');
                break;
            default:
                console.log('error',error);
        }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    console.log(event);
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="text-center p-10 mt-5">
      <h1 className="mb-8 text-3xl text-center">
        Sign In with your email and password
      </h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="email"
                required
                placeholder="Email"
                onChange={handleChange}
                name="email"
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
          </div>
          <button
            className="mt-4 w-48 text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-center"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <SignInGoogle/>
    </div>
  );
};

export default SignInForm;
