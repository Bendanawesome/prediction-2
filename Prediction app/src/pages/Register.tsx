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
  IonToast,
  IonCard
} from '@ionic/react';
import { apiService } from '../services/apiService';
import '../pages/Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Handle user registration
  const handleRegister = async () => {
    if (!username || !email || !password) {
      setToastMessage('All fields are required.');
      setShowToast(true);
      return;
    }

    try {
      const response = await apiService.register({ username, email, password });
      console.log(response);
      setToastMessage('Registration successful! You can now log in.');
    } catch (error) {
      console.error('Registration error:', error);
      setToastMessage('Registration failed. Please try again.');
    } finally {
      setShowToast(true);
    }
  };

  return (
    <IonPage className='me'>
      <IonHeader>
        <IonToolbar>
          <IonTitle color={'success'}>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className='icard'>
          <IonItem>
            <IonInput
              value={username}
              onIonChange={e => setUsername(e.detail.value!)}
              required
              label="Username"
              labelPlacement="floating"
              placeholder="Enter your username"
            />
          </IonItem>
          <IonItem>
            <IonInput
              type="email"
              value={email}
              onIonChange={e => setEmail(e.detail.value!)}
              required
              label="Email"
              labelPlacement="floating"
              placeholder="Enter your email"
            />
          </IonItem>
          <IonItem>
            <IonInput
              type="password"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
              required
              label="Password"
              labelPlacement="floating"
              placeholder="Enter your password"
            />
          </IonItem>
          <IonButton expand="full" onClick={handleRegister} color={'success'}>
            Register
          </IonButton>
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message={toastMessage}
            duration={2000}
          />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
