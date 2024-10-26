import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ModelTraining from '../components/ModelTraining'; // Adjust the path if necessary

const TrainPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Model Training</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Train Your Model</h2>
        <ModelTraining />
      </IonContent>
    </IonPage>
  );
};

export default TrainPage;
