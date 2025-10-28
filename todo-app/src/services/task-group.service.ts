
import type { DeadlineTaskType} from "../shared/types/task.types"
import TaskService from "./task.service"

class TaskGroupService{
    async getTasks(groupName:string){
        const taskService = new TaskService()
        const response = await taskService.getAllEnabledTasks()
        if(!response){
            return []
        }
        return response.filter((data:DeadlineTaskType) =>
            data.tasks?.some((task) => task.groupName?.toLowerCase() === groupName.toLowerCase())
        )
    }
}

export const taskGroupService = new TaskGroupService()