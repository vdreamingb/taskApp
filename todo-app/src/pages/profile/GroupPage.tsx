import { useParams } from "react-router-dom"
import PageLayout from "./PageLayout"
import { taskGroupService } from "../../services/task-group.service"
import { useQuery, useQueryClient} from "@tanstack/react-query"
import Task from "../../shared/ui/profile/content/tasks/Task"
import { getDate } from "../../services/display.service"
import CustomModal from "../../shared/ui/CustomModal"
import ChangeProgressForm from "../../widgets/profile/ChangeProgressForm"
import useModal from "../../shared/custom-hooks/useModal"
import { useState, useRef, useMemo} from "react"
import type { TaskType } from "../../shared/types/task.types"

interface Props{
    groupName: string | undefined
}

const Content = ({groupName}:Props):React.JSX.Element => {
    const modalProperties1 = useModal()
    const [id,setId] = useState<number>(0)
    useQueryClient()
    const statusFormRef = useRef(modalProperties1.openModal)
    
    const tasksQuery = useQuery({
        queryKey: ["group-tasks", groupName],
        queryFn: async () => await taskGroupService.getTasks(String(groupName)),
    });

    return <>
        <div className="tasks-app__header">
            <h4 className="profile-title">{groupName}</h4>
        </div>
        <ul className="tasks-list">
        {tasksQuery.data?.map((data, id) => 
            <li key={id} className="tasks-list__item">
                <h5 className="deadline">Deadline: {getDate(data.deadline)}</h5>
            <ul>
              {data.tasks.map((task: TaskType, id: number) => (
                <Task
                  key={id}
                  id={task.id}
                  title={task.title}
                  creationDate={getDate(task.creationDate)}
                  progress={task.progress}
                  description={task.description}
                  groupName={task.groupName}
                  ref={statusFormRef}
                  setId={setId}
                />
              ))}
            </ul>
            </li>
        )}
        </ul>
        <CustomModal title="Change status" modalIsOpen={modalProperties1.modalIsOpen} closeModal={modalProperties1.closeModal} form={<ChangeProgressForm id={id} closeModal={modalProperties1.closeModal} />} />
    </>
}

const GroupPage = ():React.JSX.Element => {
    const { groupName } = useParams()

    useMemo(()=> groupName, [groupName])

    return <PageLayout content={<Content groupName={groupName} />} />
}

export default GroupPage