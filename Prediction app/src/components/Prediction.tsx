import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonLoading, IonToast } from '@ionic/react';

const Prediction: React.FC = () => {
  const [inputData, setInputData] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [predictionResult, setPredictionResult] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  const handlePredict = async () => {
    setLoading(true);
    setToastMessage('');
    setPredictionResult(null);

    // Simulate a prediction process
    try {
      // Replace this with actual API call to your prediction backend
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulated prediction result
      const result = `Predicted value based on input: ${inputData}`;
      setPredictionResult(result);
    } catch (error) {
      setToastMessage('Error during prediction.');
    } finally {
      setLoading(false);
      setShowToast(true);
    }
  };

  return (
    <div>
      <IonItem>
        <IonLabel position="stacked">Input Data</IonLabel>
        <IonInput
          value={inputData}
          onIonChange={(e) => setInputData(e.detail.value!)}
          placeholder="Enter input data for prediction"
        />
      </IonItem>

      <IonButton expand="full" onClick={handlePredict} disabled={loading}>
        {loading ? 'Predicting...' : 'Get Prediction'}
      </IonButton>

      <IonLoading isOpen={loading} message={'Making prediction...'} />
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastMessage || (predictionResult || '')}
        duration={3000}
      />
    </div>
  );
};

export default Prediction;
