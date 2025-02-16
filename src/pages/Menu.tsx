import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenu, 
  IonMenuButton, 
  IonPage, 
  IonRouterOutlet, 
  IonSplitPane, 
  IonTitle, 
  IonToolbar, 
  IonMenuToggle, 
  IonItem,       
  IonIcon        
} from '@ionic/react';
import { homeOutline, rocketOutline } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';
import About from './About';
import Home from './Home';

const Menu: React.FC = () => {
  const path = [
      { name: 'Home', url: '/it35-lab/app/home', icon: homeOutline },
      { name: 'About', url: '/it35-lab/app/about', icon: rocketOutline },
  ];

  return (
      <IonPage>
          <IonSplitPane contentId="main">
              <IonMenu contentId="main">
                  <IonHeader>
                      <IonToolbar>
                          <IonTitle>Menu</IonTitle>
                      </IonToolbar>
                  </IonHeader>
                  <IonContent>
                      {path.map((item, index) => (
                          <IonMenuToggle key={index}>  
                              <IonItem routerLink={item.url} routerDirection="forward">
                                  <IonIcon icon={item.icon} slot="start" />
                                  {item.name}
                              </IonItem>
                          </IonMenuToggle>
                      ))}
                  </IonContent>
              </IonMenu>
              <IonRouterOutlet id="main">
                  <Route exact path="/it35-lab/app/home" component={Home} />
                  <Route exact path="/it35-lab/app/about" component={About} />
                  <Route exact path="/it35-lab/app/">
                      <Redirect to="/it35-lab/app/home" />
                  </Route>
              </IonRouterOutlet>
          </IonSplitPane>
      </IonPage>
  );
};

export default Menu;