package com.railway.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.railway.demo.entity.Ticket;
import com.railway.demo.repository.TicketRepository;

@Service
public class TicketService {

    @Autowired
    private TicketRepository repo;

    public Ticket bookTicket(Ticket ticket) {
        return repo.save(ticket);
    }

    public List<Ticket> getAllTickets() {
        return repo.findAll();
    }

    public void cancelTicket(int id) {
        repo.deleteById(id);
    }
}