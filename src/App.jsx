import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Table from './Table';
import './App.css';

function App() {
  const [submissions, setSubmissions] = useState([]);

  const handleFormSubmit = (formData) => {
    setSubmissions([...submissions, formData]);
  };

  return (
    <div className="container">
      <Header />
      <Form onFormSubmit={handleFormSubmit} />
      <Table data={submissions} />
    </div>
  );
}

export default App;
