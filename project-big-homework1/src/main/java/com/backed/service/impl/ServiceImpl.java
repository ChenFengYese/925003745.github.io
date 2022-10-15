package com.backed.service.impl;

import com.backed.mapper.StudentMapper;
import com.backed.pojo.Client;
import com.backed.service.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class ServiceImpl implements Service {


    @Autowired(required = false)
    StudentMapper mapper__;

//    @Autowired(required = false)
//    Mapper mapper___;

    public List<Client> query__() {
        return mapper__.query__();
    }

    @Override
    public Client login__(Client client){
        return mapper__.login__(client);
    }


    @Override
    public void add(Client client) {
        mapper__.add(client);
    }

}
