import AuthForm from "../../widgets/auth/AuthForm";
import ChangeLanguage from "../../shared/ui/ChangeLanguage";

const SignUp = (): React.JSX.Element => {
  return (
    <div className="auth-page__layout">
      <AuthForm type="sign-up" />
      <ChangeLanguage />
    </div>
  );
};

export default SignUp;
