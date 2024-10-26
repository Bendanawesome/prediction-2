import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Login from './pages/Login'; // Import the Login component
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Palette
 * -----------------------------------------------------
 * For more information, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

import Register from './pages/Register';
import Home from './pages/Home';
import React from 'react';

import TrainPage from './pages/TrainPage'; // Page for model training
import PredictPage from './pages/PredictPage';
import UploadPage from './pages/UploadPage';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/predict" component={PredictPage} />
            <Route path="/upload" component={UploadPage} />
            <Route path="/train" component={TrainPage} />
            <Route path="/home" component={Home} />
            <Route exact path="/" render={() => <Redirect to="/home" />} /> {/* Redirect from / to /home */}
              
            <Route path="/folder/:name" exact={true}>
              <Page />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
