package com.railway.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.railway.demo.entity.Ticket;
import com.railway.demo.service.TicketService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/tickets")
public class TicketController {

    @Autowired
    private TicketService service;

    @PostMapping("/book")
    public Ticket book(@RequestBody Ticket ticket) {
        ticket.setPnr((long)(Math.random() * 1000000000));
        return service.bookTicket(ticket);
    }

    @GetMapping("/all")
    public List<Ticket> getAll() {
        return service.getAllTickets();
    }

    @DeleteMapping("/cancel/{id}")
    public String cancel(@PathVariable int id) {
        service.cancelTicket(id);
        return "Cancelled";
    }
}