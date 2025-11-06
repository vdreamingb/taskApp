import PageLayout from "./PageLayout";
import TaskForm from "../../widgets/profile/TaskForm";
import CustomModal from "../../shared/ui/CustomModal";
import useModal from "../../shared/custom-hooks/useModal";
import { useTranslation } from "react-i18next";

const Content = (): React.JSX.Element => {
  const modalProperties = useModal()
  const { t } = useTranslation()

  return (
    <div className="start-page">
      <h1 className="title">{t("Create new task")}</h1>
      <button onClick={modalProperties.openModal} className="start-work">
        {t("Let's start")}
      </button>
      <CustomModal
      title="Create task"
        form={
          <TaskForm
            closeModal={modalProperties.closeModal}
          />
        }
        closeModal={modalProperties.closeModal}
        modalIsOpen={modalProperties.modalIsOpen}
      />
    </div>
  );
};

const StartPage = (): React.JSX.Element => {
  return <PageLayout content={<Content />} />;
};

export default StartPage;
