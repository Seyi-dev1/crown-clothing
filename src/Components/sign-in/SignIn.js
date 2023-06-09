import React from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./SignIn.scss";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { createSelector } from "reselect";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
  });
  const userSelector = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser
  );

  const user = useSelector((state) => userSelector(state));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    user && navigate(-1);
  }, [user, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(emailSignInStart(inputs));
  };

  //    const handleSubmit2 = async ()=>{
  //         try {
  //             await signInWithPopup(auth, provider)
  //             navigate(-1)
  //         } catch (error) {
  //             console.log(error)
  //         }
  //     }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="sign-in">
      <h2 className="heading">I already have an acount</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          id={"email"}
          type={"email"}
          name={"email"}
          label={"Email"}
          value={inputs.email}
          handleChange={handleChange}
          required={true}
        />

        <FormInput
          id={"password"}
          type={"password"}
          name={"password"}
          label={"Password"}
          value={inputs.password}
          handleChange={handleChange}
          required={true}
        />

        <div className="buttons">
          <CustomButton type="submit" value="SIGN IN" />

          <CustomButton
            type="button"
            value="WITH GOOGLE"
            onclick={() => dispatch(googleSignInStart())}
            isGoogleSignIn={true}
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
