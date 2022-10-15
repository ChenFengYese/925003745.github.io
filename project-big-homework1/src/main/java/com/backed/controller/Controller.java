package com.backed.controller;

import com.alibaba.fastjson.JSONArray;
import com.backed.pojo.Client;
import com.backed.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

@org.springframework.stereotype.Controller
@RequestMapping("client")
public class Controller {

    @Autowired
    Service service__;

    @ResponseBody
    @RequestMapping(value="login__", produces = "text/html; charset=utf-8")
    public String login__(Client client, HttpSession session){
        System.out.println("a");
        Client $ = service__.login__(client);
        if ($ != null){
            System.out.println("b");
            session.setAttribute("users",true);
            return "Y";
        }
        System.out.println("c");
        session.setAttribute("users",false);
        return "N";
    }


    @ResponseBody
    @RequestMapping(value="query__", produces = "text/html; charset=utf-8")
    public String query__(){
        List<Client> list =service__.query__();
        return JSONArray.toJSONString(list);
    }

    @ResponseBody
    @RequestMapping("add")
    public String add(Client client){
        service__.add(client);
        return "1";}

}
