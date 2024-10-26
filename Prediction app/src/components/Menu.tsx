import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, homeOutline, homeSharp, trainOutline, trainSharp, cloudUploadOutline, cloudUploadSharp, starOutline, starSharp } from 'ionicons/icons'; // Import icons for Home, Upload, Training, Predict
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',  // Home page entry
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Upload',
    url: '/upload', // Corrected URL for UploadPage
    iosIcon: cloudUploadOutline, // Use appropriate icon for Upload
    mdIcon: cloudUploadSharp
  },
  {
    title: 'Model Training',
    url: '/train', // URL for TrainPage
    iosIcon: trainOutline, // Use appropriate icon for Model Training
    mdIcon: trainSharp
  },
  {
    title: 'Predict',
    url: '/predict', // URL for PredictPage
    iosIcon: starOutline, // Use appropriate icon for Predict
    mdIcon: starSharp
  },
  
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Explore</IonListHeader>
          <IonNote>Welcome back</IonNote>

          {/* Section for Home and Upload */}
          <IonListHeader>Main Options</IonListHeader>
          {appPages.slice(0, 4).map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem routerLink={appPage.url} routerDirection="none" className={location.pathname === appPage.url ? 'selected' : ''}>
                  <IonIcon ios={appPage.iosIcon} md={appPage.mdIcon} slot="start" />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}

          {/* Section for Additional Options */}
          
          {appPages.slice(4).map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem routerLink={appPage.url} routerDirection="none" className={location.pathname === appPage.url ? 'selected' : ''}>
                  <IonIcon ios={appPage.iosIcon} md={appPage.mdIcon} slot="start" />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
