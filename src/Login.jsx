
import React, { useState } from 'react';
import './bootstrap-5.0.2-dist/css/bootstrap.min.css';
import './bootstrap-5.0.2-dist/js/bootstrap.min.js';
function LoginPage() {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    // Gérer la soumission du formulaire ici
    console.log('Formulaire soumis :', { name, firstName, email });

    
  };

  return (
    <div className="container">
      <h1>Connexion</h1>

      <form onSubmit={handleSubmit}>
        <label className="form-label">Nom:</label>
        <input
        className="form-control"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label className="form-label">Prénom:</label>
        <input
        className="form-control"
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />

        <label className="form-label">Email:</label>
        <input
        className="form-control"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button className='btn btn-primary' type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default LoginPage;

