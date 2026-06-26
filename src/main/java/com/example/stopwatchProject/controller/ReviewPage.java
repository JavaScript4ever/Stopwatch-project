package com.example.stopwatchProject.controller;

import com.example.stopwatchProject.service.UserRateService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.stopwatchProject.entity.UserRateEntity;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api")
public class ReviewPage {
    private final UserRateService userRateService;

    ReviewPage(UserRateService userRateService) {
        this.userRateService = userRateService;
    }

    @PostMapping("/sendUserReview")
    public List<UserRateEntity> sendUserReview(@RequestBody UserRateEntity userRate) {
        return userRateService.setUserReview(userRate);
    }
    
}
