import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodo from "./Addtodo";
import Filter from "./Filter";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");

    // Load saved todos from local storage on initial render
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);
    }, []);

    // Persist todos to local storage whenever they change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "pending") return !todo.completed;
        return true; // "all"
    });

    return (
        <div>
            <AddTodo onAdd={addTodo} />
            <Filter currentFilter={filter} onFilterChange={setFilter} />
            <TodoList
                todos={filteredTodos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />
        </div>
    );
};

export default TodoApp;
