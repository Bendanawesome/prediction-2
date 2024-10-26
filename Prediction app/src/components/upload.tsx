import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonToast } from '@ionic/react';
import axios from 'axios';

const DataUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file || !name) {
      setToastMessage('Please provide a name and select a file.');
      setShowToast(true);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('description', description || '');

    try {
      const response = await axios.post('/dataset', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Add your authorization token if required
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        },
      });

      if (response.status === 200) {
        setToastMessage('Dataset uploaded successfully!');
      }
    } catch (error) {
      console.error('Error uploading dataset:', error);
      setToastMessage('Error uploading dataset. Please try again.');
    } finally {
      setShowToast(true);
      setName('');
      setDescription('');
      setFile(null);
    }
  };

  return (
    <div>
      <IonItem>
        <IonLabel position="stacked">Dataset Name</IonLabel>
        <IonInput value={name} onIonChange={e => setName(e.detail.value!)} />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Description</IonLabel>
        <IonInput value={description} onIonChange={e => setDescription(e.detail.value!)} />
      </IonItem>

      <IonItem>
        <IonLabel>Select CSV File</IonLabel>
        <input type="file" accept=".csv" onChange={handleFileChange} />
      </IonItem>

      <IonButton expand="full" onClick={handleUpload}>
        Upload Dataset
      </IonButton>

      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastMessage}
        duration={2000}
      />
    </div>
  );
};

export default DataUpload;
