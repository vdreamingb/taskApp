import axios from "axios";
import type { DeadlineTaskType, TaskType } from "../shared/types/task.types";
import type { ApiTask } from "../shared/types/task.types";

class TaskService {
  private path = "http://localhost:8010/api/tasks/";

  async createTask(
    title: string,
    description: string,
    deadline: string,
    groupId: number
  ) {
    const token = localStorage.getItem("userAuth");
    try {
      const response = await axios.post(
        `${this.path}create`,
        {
          title: title,
          description: description,
          deadline: deadline,
          groupId: groupId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status == 200) {
        return "Success";
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("Error: " + error.message);
      } else {
        alert("An unknown error occurred");
      }
    }
  }

  async getAllEnabledTasks() {
    const token = localStorage.getItem("userAuth");
    try {
      const response = await axios.get(`${this.path}user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status == 200) {
        const responseData = response.data;
        const organizedData: TaskType[] = (responseData as ApiTask[]).map((task: ApiTask): TaskType => {
          return {
            id: task.id,
            title: task.title,
            description: task.description,
            deadline: task.deadline,
            creationDate: task.createdAt,
            progress: task.status,
            groupName: task.groupName,
          };
        });
        const uniqueDates: string[] = [
          ...new Set(organizedData.map((data: TaskType) => data.deadline)),
        ];

        const filteredData: DeadlineTaskType[] = uniqueDates.map(
          (deadline: string) => {
            return {
              deadline: deadline,
              tasks: organizedData
                .filter((task: TaskType) => {
                  if (task && deadline == task.deadline) {
                    return task;
                  }
                  return undefined;
                })
                .sort(
                  (a, b) =>
                    new Date(a.deadline).getTime() -
                    new Date(b.deadline).getTime()
                ),
            };
          }
        );

        return filteredData.sort(
          (a, b) =>
            new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
        );
      }
    } catch (error:unknown) {
      if (error instanceof Error) {
        alert("Error: " + error.message);
      } else {
        alert("An unknown error occurred");
      }
    }
  }
  async changeTaskStatus(id: number, status: string) {
    try {
      const token = localStorage.getItem("userAuth");
      await axios.put(
        `${this.path}status`,
        {
          taskId: id,
          newStatus: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error:unknown) {
      if (error instanceof Error) {
        alert("Error: " + error.message);
      } else {
        alert("An unknown error occurred");
      }
    }
  }

  async deleteTask(id: number) {
    try {
      console.log("Trying to delete the taks with id: ", id);
      const token = localStorage.getItem("userAuth");
      await axios.delete(`http://localhost:8010/api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("Error: " + error.message);
      } else {
        alert("An unknown error occurred");
      }
    }
  }
}

export default TaskService;
