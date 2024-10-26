import React, { useEffect, useState } from 'react';
import { IonPage, IonButton, IonList, IonItem, IonLabel } from '@ionic/react';
import api from '../services/axiosInstance';

const Home: React.FC = () => {
  const [datasets, setDatasets] = useState([]);
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const datasetResponse = await api.get('/datasets');
      setDatasets(datasetResponse.data);

      const modelResponse = await api.get('/models');
      setModels(modelResponse.data);
    };

    fetchData();
  }, []);

  return (
    <IonPage>
      <h1>Datasets</h1>
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
    </IonPage>
  );
};

export default Home;
