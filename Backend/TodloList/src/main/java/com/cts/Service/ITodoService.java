package com.cts.Service;

import java.util.List;

import com.cts.entity.Todo;

public interface ITodoService {
	List<Todo> getAllTodos();

	Todo createTodo(Todo todo);

	Todo updateTodo(Integer id, Todo updatedTodo);

	void deleteTodo(Integer id);

}

