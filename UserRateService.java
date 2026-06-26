package com.example.stopwatchProject.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.stopwatchProject.entity.UserRateEntity;
import com.example.stopwatchProject.repository.UserRateRepository;

@Service
public class UserRateService {
    private final UserRateRepository userRateRepository;

    public UserRateService(UserRateRepository userRateRepository) {
        this.userRateRepository = userRateRepository;
    }

    public UserRateEntity setUserReview(UserRateEntity userRate){
        return userRateRepository.save(userRate);
    }

    public List<UserRateEntity> getUserReview() {
        return userRateRepository.findAll();
    }
}
