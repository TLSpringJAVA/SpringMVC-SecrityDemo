package com.anlu.example.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/index")
public class HomeController {
    private static  final Logger logger = LoggerFactory.getLogger(HomeController.class);

    @RequestMapping(value = "/hello")
    public String index(){
        logger.info("the first jsp");
        return "hello";
    }
}
