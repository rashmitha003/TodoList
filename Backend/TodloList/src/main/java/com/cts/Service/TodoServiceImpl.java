package com.cts.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.Repository.TodoRepository;
import com.cts.entity.Todo;

@Service
public class TodoServiceImpl implements ITodoService{
	
	@Autowired
    private TodoRepository todoRepository;

	@Override
	public List<Todo> getAllTodos() {
		return todoRepository.findAll();
	}

	@Override
	public Todo createTodo(Todo todo) {
		return todoRepository.save(todo);
	}

	@Override
	public Todo updateTodo(Integer id, Todo updatedTodo) {
		Todo existing = todoRepository.findById(id).orElseThrow();
        existing.setTitle(updatedTodo.getTitle());
        existing.setCompleted(updatedTodo.isCompleted());
        return todoRepository.save(existing);
	}

	@Override
	public void deleteTodo(Integer id) {
		todoRepository.deleteById(id);
	}

}
