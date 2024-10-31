package com.app.fullStackBackend.repository;

import com.app.fullStackBackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User,Integer>{


}
