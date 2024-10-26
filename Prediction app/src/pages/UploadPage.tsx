import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import DataUpload from '../components/upload'; // Adjust the path if necessary

const UploadPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Upload Data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Upload Your Data File</h2>
        <DataUpload />
      </IonContent>
    </IonPage>
  );
};

export default UploadPage;
