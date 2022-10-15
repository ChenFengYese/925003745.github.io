package com.backed.mapper;

import com.backed.pojo.Client;

import java.util.List;
//mybatis -->jdbc

public interface StudentMapper {
    public List<Client> query__();

    public void add(Client client);

    public Client login__(Client client);

}
