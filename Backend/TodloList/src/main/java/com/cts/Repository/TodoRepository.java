package com.cts.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.entity.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer> {

}
