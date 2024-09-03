import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';

function EditTodo({ todos, editTodo }){

        const { id } = useParams();
        const navigate = useNavigate();
        const todo = todos.find(todo => todo.id === parseInt(id));
      
        const [task, setTask] = useState(todo|| {title: '', description: '', priority: 1, startDate: '', endDate: '' });
        useEffect(() => {
          if (todo) {
            setTask(todo);
          }
        }, [todo]);
      
      
        const handleSubmit = (e) => {
          e.preventDefault();
          editTodo(todo.id, task);
          navigate('/Tasks');
        };
      
        return (
          <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="mb-3">
              <label className="form-label">Titre :</label>
              <input
                type="text"
                className="form-control"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                required
              />
              <div className="invalid-feedback">Veuillez entrer un titre.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Description :</label>
              <textarea
                className="form-control"
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
                required
              />
              <div className="invalid-feedback">Veuillez entrer une description.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Priorité :</label>
              <select
                className="form-select"
                value={task.priority}
                onChange={(e) => setTask({ ...task, priority: e.target.value })}
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <div className="invalid-feedback">Veuillez sélectionner une priorité.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Date de début :</label>
              <input
                type="datetime-local"
                className="form-control"
                value={task.startDate}
                onChange={(e) => setTask({ ...task, startDate: e.target.value })}
                required
              />
              <div className="invalid-feedback">Veuillez entrer une date de début.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Date de fin :</label>
              <input
                type="datetime-local"
                className="form-control"
                value={task.endDate}
                onChange={(e) => setTask({ ...task, endDate: e.target.value })}
                required
              />
              <div className="invalid-feedback">Veuillez entrer une date de fin.</div>
            </div>
            <button type="submit" className="btn btn-primary">Mettre à jour la tâche</button>
          </form>
        );
      };
      
      export default EditTodo;
