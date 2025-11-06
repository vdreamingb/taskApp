import AuthForm from "../../widgets/auth/AuthForm";
import ChangeLanguage from "../../shared/ui/ChangeLanguage";

const LogIn = (): React.JSX.Element => {
  return (
    <div className="auth-page__layout">
      <AuthForm type="log-in" />
      <ChangeLanguage />
    </div>
  );
};

export default LogIn;
