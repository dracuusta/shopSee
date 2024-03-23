import { useContext } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../components/context/user.context";

export const SignInGoogle = () => {
  const {setCurrentUser}:any=useContext(UserContext);
  const logGoogleUser = async () => {
    const response:any = await signInWithGooglePopup();
    setCurrentUser(response.user);
    await createUserDocumentFromAuth(response);
  };

  return (
    <div className="flex justify-center items-start space-x-10 mt-10">
      <div className="w-48 max-w-xs">
        <button 
          onClick={logGoogleUser}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-150 ease-in-out w-full"
        >
          Sign-in With Google
        </button>
      </div>
    </div>
  );
};