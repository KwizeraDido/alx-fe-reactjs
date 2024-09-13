// src/App.jsx
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
    return (
        <div>
            <h1>Controlled Components</h1>
            <RegistrationForm />
            
            <h1>Formik Components</h1>
            <formikForm />
        </div>
    );
}

export default App;
