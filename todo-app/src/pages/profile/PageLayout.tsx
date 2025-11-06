import type { PageLaoutType } from "../../shared/types/profile.types";
import Aside from "../../widgets/profile/Aside";
import useCheckAuth from "../../shared/custom-hooks/useCheckAuth";
import useGroups from "../../shared/custom-hooks/useGroups";
import { useMemo } from "react";
import ChangeLanguage from "../../shared/ui/ChangeLanguage";

const PageLayout = ({ content }: PageLaoutType) => {
  const auth = useCheckAuth();
  const paths = useGroups();

  useMemo(() => paths ?? null, [paths]);
  useMemo(() => auth, [auth]);

  if (auth) {
    return (
      <div className="profile-page__layout">
        <Aside paths={paths ?? null} />
        <div className="profile-content">{content}</div>
        <ChangeLanguage />
      </div>
    );
  } else {
    console.log("the access denied page should appear");
    return (
      <h1 className="access-denied">
        Error: 403 <br /> Access denied
      </h1>
    );
  }
};
export default PageLayout;
