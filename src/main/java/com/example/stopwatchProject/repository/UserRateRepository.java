package com.example.stopwatchProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.stopwatchProject.entity.UserRateEntity;

public interface UserRateRepository extends JpaRepository<UserRateEntity,Long> {

    
} 