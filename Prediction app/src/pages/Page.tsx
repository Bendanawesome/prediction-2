import React, { useEffect, useState } from 'react';
import { IonPage, IonButton, IonList, IonItem, IonLabel, IonToolbar, IonTitle } from '@ionic/react';
import api from '../services/axiosInstance';
import DataUpload from '../components/upload';

const Home: React.FC = () => {
  const [datasets, setDatasets] = useState<any[]>([]); // Specify type for datasets
  const [models, setModels] = useState<any[]>([]); // Specify type for models

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datasetResponse = await api.get('/datasets');
        setDatasets(datasetResponse.data);

        const modelResponse = await api.get('/models');
        setModels(modelResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>Datasets</IonTitle>
      </IonToolbar>
      <IonList>
        {datasets.map((dataset) => (
          <IonItem key={dataset.id}>
            <IonLabel>{dataset.name}</IonLabel>
          </IonItem>
        ))}
      </IonList>

      <h1>Models</h1>
      <IonList>
        {models.map((model) => (
          <IonItem key={model.id}>
            <IonLabel>{model.name}</IonLabel>
          </IonItem>
        ))}
      </IonList>

      <div>
        <h1>Upload Data</h1>
        <DataUpload />
      </div>
    </IonPage>
  );
};

export default Home;
