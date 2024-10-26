// src/pages/Login.js
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonToast,
} from '@ionic/react';
import { apiService } from '../services/apiService'; // Adjust this import based on your API service

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Handle user login
  const handleLogin = async () => {
    if (!username || !password) {
      setToastMessage('Please fill in all fields.');
      setShowToast(true);
      return;
    }

    try {
      const response = await apiService.login(username, password);
      // Handle successful login (e.g., store token, redirect)
      console.log(response);
      setToastMessage('Login successful!');
      // Redirect or handle token storage here (optional)
    } catch (error) {
      console.error('Login error:', error);
      setToastMessage('Login failed. Please check your credentials.');
    } finally {
      setShowToast(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput
            value={username}
            onIonChange={e => setUsername(e.detail.value!)}
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            required
          />
        </IonItem>
        <IonButton expand="full" onClick={handleLogin}>
          Login
        </IonButton>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
