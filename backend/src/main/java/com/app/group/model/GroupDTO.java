package com.app.group.model;

import com.app.auth.model.User;
import com.app.auth.model.UserDTO;
import com.app.task.dto.TaskDTO;
import com.app.task.model.Task;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GroupDTO {

    private Integer id;
    private UserDTO user;
    private String name;
    private String description;
    private LocalDateTime createdAt = LocalDateTime.now();
    private boolean isEnabled;
    private List<TaskDTO> tasks;


    public static GroupDTO toDto(Group group) {
        return GroupDTO.builder()
                .id(group.getId())
                .name(group.getName())
                .description(group.getDescription())
                .isEnabled(group.isEnabled())
                .createdAt(group.getCreatedAt())
                .tasks(TaskDTO.toDtos(group.getTasks()))
                .user(UserDTO.toDto(group.getUser()))
                .build();
    }

    public static List<GroupDTO> toDtos(List<Group> groupList) {
        List<GroupDTO> groupDTOList = new ArrayList<>();
        for (Group group : groupList) {
            groupDTOList.add(toDto(group));
        }
        return groupDTOList;
    }
}

