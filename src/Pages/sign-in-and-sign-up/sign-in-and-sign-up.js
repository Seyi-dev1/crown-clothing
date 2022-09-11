import SignIn from '../../Components/sign-in/SignIn'
import SignUp from '../../Components/sign-up/SignUp'
import './sign-in-and-sign-up.scss'
const SignInAndSignUpPage = ()=>{
    return(
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}
export default SignInAndSignUpPage