package com.example.stopwatchProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StopwatchPage {
    @GetMapping("/")
    public String getStopwatchPage() {
        return "redirect:/stopwatch/index.html";
    }
    
    @GetMapping("/reviewPage")
    public String getReviewPage() {
        return "redirect:/review/review.html";
    }
    
}
