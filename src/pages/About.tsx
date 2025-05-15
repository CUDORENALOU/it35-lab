import React, { useState } from 'react';
import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardContent, 
  IonText, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonList, 
  IonItem, 
  IonModal, 
  IonButton 
} from '@ionic/react';

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About the App</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ backgroundColor: '#f7f7f7' }}>
        <IonGrid style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" size-md="8">
              {/* Introduction */}
              <IonCard style={{ borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff', marginBottom: '20px' }}>
                <IonCardContent>
                  <IonText>
                    <h2 style={{ fontSize: '2.2em', textAlign: 'center', color: '#333', fontWeight: '600', marginBottom: '20px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
                      Welcome to My App
                    </h2>
                    <p style={{ fontSize: '1.15em', color: '#555', textAlign: 'center', lineHeight: '1.8', marginBottom: '20px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      This is a simple mobile app created as part of my learning journey in app development. Built using **Ionic** and **React**, this app allows me to showcase the concepts I've learned in app development.
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>

              {/* Key Features */}
              <IonCard style={{ borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff', marginBottom: '20px' }}>
                <IonCardContent>
                  <IonText>
                    <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: '500', marginBottom: '20px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
                      Key Features
                    </h3>
                    <IonList lines="none" style={{ fontSize: '1.1em', color: '#555', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      <IonItem style={{ paddingLeft: '0px' }}><strong>Cross-Platform Support:</strong> The app runs on both iOS and Android devices, made possible by Ionic Framework.</IonItem>
                      <IonItem style={{ paddingLeft: '0px' }}><strong>Simple UI:</strong> A clean, minimal design that’s easy to use and navigate.</IonItem>
                      <IonItem style={{ paddingLeft: '0px' }}><strong>Real-Time Updates:</strong> Real-time data syncing with backend services like Supabase.</IonItem>
                    </IonList>
                    <IonButton onClick={openModal} color="secondary" expand="full" style={{ marginTop: '20px', fontWeight: '600', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
                      Learn More
                    </IonButton>
                  </IonText>
                </IonCardContent>
              </IonCard>

              {/* Modal with Detailed Information */}
              <IonModal isOpen={isModalOpen} onDidDismiss={closeModal}>
                <IonContent>
                  <IonCard style={{ margin: '20px', borderRadius: '10px' }}>
                    <IonCardContent>
                      <IonText>
                        <h2 style={{ fontSize: '1.8em', color: '#333', fontWeight: '600', marginBottom: '20px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>App Development Overview</h2>
                        <p style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.7', marginBottom: '20px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          Here's a quick summary of the app development process:
                        </p>
                        <ul style={{ fontSize: '1.1em', color: '#555', lineHeight: '1.8', paddingLeft: '20px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          <li><strong>Planning:</strong> Understanding the problem, gathering requirements, and defining the app’s objectives.</li>
                          <li><strong>Design:</strong> Creating wireframes and user interfaces for a seamless experience.</li>
                          <li><strong>Development:</strong> Writing the code for the frontend and backend of the app, integrating APIs, and managing data.</li>
                          <li><strong>Testing:</strong> Ensuring the app works properly by performing testing on multiple devices.</li>
                          <li><strong>Deployment:</strong> Launching the app on app stores and making it available to users.</li>
                        </ul>
                        <IonButton onClick={closeModal} expand="full" color="primary" style={{ marginTop: '20px', fontWeight: '600', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
                          Close
                        </IonButton>
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </IonContent>
              </IonModal>

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default About;
