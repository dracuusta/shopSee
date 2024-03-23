import SignInForm from "./SingInForm"
import SignUpForm from './signUp'

export const Authentication=()=>{
    return (
       <>
       <div className="flex justify-center items-start space-x-8 mt-10">
        <SignInForm/>
        <SignUpForm/>
        </div>
        </>
    )
}