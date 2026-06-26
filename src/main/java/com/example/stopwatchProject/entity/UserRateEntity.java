package com.example.stopwatchProject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "userreviews")
public class UserRateEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    public String rate;

    private String review;

    public Long getId(){return id;}

    public void setId(Long id){this.id = id;}

    public String getName(){return name;}

    public void setName(String name){this.name = name;}

    public String getRate(){return rate;}

    public void setRate(String rate){this.rate = rate;}

    public String getReview(){return review;}

    public void setReview(String review){this.review = review;}

}
