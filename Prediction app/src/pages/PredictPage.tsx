import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Prediction from '../components/Prediction'; // Adjust the path if necessary

const PredictPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Make a Prediction</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Predict the Outcome</h2>
        <Prediction />
      </IonContent>
    </IonPage>
  );
};

export default PredictPage;
