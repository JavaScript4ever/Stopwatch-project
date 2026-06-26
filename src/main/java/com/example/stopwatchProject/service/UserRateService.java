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

    public List<UserRateEntity> setUserReview(UserRateEntity userRate){
        userRateRepository.save(userRate);
        return userRateRepository.findAll();
    }
}
