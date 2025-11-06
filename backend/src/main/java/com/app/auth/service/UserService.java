package com.app.auth.service;

import com.app.auth.model.PasswordChangeRequest;
import com.app.auth.model.User;
import com.app.dto.CreateUserRequest;
import com.app.dto.LoginRequest;
import com.app.dto.Response;
import org.springframework.http.ResponseEntity;

public interface UserService {

    ResponseEntity<String> signUp(CreateUserRequest createUserRequest);
    ResponseEntity<?> login(LoginRequest userRequest);

    User getCurrentLoggedInUser();

    String disableUser(String email);

    ResponseEntity<?> changePassword(PasswordChangeRequest request);

     /**
     * Deletes the currently authenticated user's account.
     *
     * @return ResponseEntity indicating success or failure of the deletion
     */
    ResponseEntity<String> deleteUserAccount();
    
}
