package com.backed.service;

import com.backed.pojo.Client;

import java.util.List;

public interface Service {
    public List<Client> query__();
    public void add(Client client);
    public Client login__(Client client);

}
