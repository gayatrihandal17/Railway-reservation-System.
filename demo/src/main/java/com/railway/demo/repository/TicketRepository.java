package com.railway.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.railway.demo.entity.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Integer> {
}