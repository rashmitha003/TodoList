package com.cts.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cts.Service.ITodoService;
import com.cts.entity.Todo;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {
	@Autowired
	private ITodoService todoService;

	@GetMapping("/ViewAllTodo")
	public List<Todo> getTodos() {
		return todoService.getAllTodos();
	}

	@PostMapping("/AddToDoList")
	public Todo addTodo(@RequestBody Todo todo) {
		return todoService.createTodo(todo);
	}
	
	@PutMapping("/UpdateTodo/{id}")
	public Todo updateTodo(@PathVariable Integer id, @RequestBody Todo todo) {
		return todoService.updateTodo(id, todo);
	}
	
	@DeleteMapping("/DeleteTodo/{id}")
	public void deleteTodo(@PathVariable Integer id) {
		 todoService.deleteTodo(id);
	}
	
	
}
