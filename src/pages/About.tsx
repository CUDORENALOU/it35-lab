import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonText, 
  IonCard, 
  IonCardContent 
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonText>
              <h2>Welcome to Our App!</h2>
              <p>
                This application is built using Ionic and React, designed to help users manage their tasks and personal profiles. We provide a seamless experience for users, with features like authentication, profile management, and more.
              </p>

              <h3>Key Features:</h3>
              <ul>
                <li><strong>Login & Authentication:</strong> Secure user login and sign-up through integrated authentication.</li>
                <li><strong>Profile Management:</strong> Users can update their profile information easily.</li>
                <li><strong>Tabs & Sidebar:</strong> Navigate the app efficiently with a side navigation bar and tab-based structure.</li>
                <li><strong>Supabase Backend:</strong> Integrated with Supabase for real-time database operations, providing secure and reliable backend support.</li>
              </ul>

              <h3>Development Stack:</h3>
              <p>
                Built with <strong>Ionic</strong> for the frontend, powered by <strong>React</strong> for a modern, dynamic experience, and connected to <strong>Supabase</strong> as the backend.
              </p>

              <h3>Cool Styling:</h3>
              <p>
                The design of this app is inspired by the developer's favorite character, <strong>Doraemon</strong>. The playful colors, simple shapes, and clean design reflect the cheerful and friendly nature of Doraemon, combining both functionality and style. 
                The background is a soft blue to mimic Doraemon’s face, with accents of red to represent his iconic scarf and bell. This approach not only brings a fun and engaging atmosphere to the app, but also makes it visually appealing and easy to navigate.
              </p>
            </IonText>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonText>
              <h3>IT-35A Application Development</h3>
              <p>
                This app is a part of the <strong>IT-35A Application Development</strong> project. The course focuses on building real-world applications using modern frameworks and backend technologies. This project provides practical experience in developing full-stack applications, with emphasis on frontend technologies like Ionic and React, and backend integration through services like Supabase.
              </p>
              <p>
                The application we’ve developed in this project covers various important aspects of software development, including:
              </p>
              <ul>
                <li><strong>Frontend Development:</strong> Building dynamic user interfaces using Ionic and React.</li>
                <li><strong>Authentication:</strong> Implementing user authentication and profile management features.</li>
                <li><strong>Backend Integration:</strong> Connecting the app to a Supabase backend for real-time data management.</li>
                <li><strong>UI/UX Design:</strong> Creating a visually appealing design, inspired by the character Doraemon to make the app more engaging.</li>
              </ul>
              <p>
                This project is not just about coding; it’s also about understanding how to design an app, implement a backend, and ensure a smooth user experience, preparing us for the real-world challenges of application development.
              </p>
            </IonText>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonText>
              <p style={{ fontSize: '1.2em', fontStyle: 'italic', textAlign: 'center' }}>
                Developed by: <strong>Renalou Cudo</strong>
              </p>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
