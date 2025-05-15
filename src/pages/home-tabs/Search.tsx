import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonText, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle, 
  IonAvatar, 
  IonImg 
} from '@ionic/react';
import { logoFacebook, call, pin } from 'ionicons/icons';

const Search: React.FC = () => {
  const handleFacebookContact = () => {
    window.open('https://www.facebook.com/Mallooy.28', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+1234567890', '_self'); // Replace with actual phone number
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="contact-page">
        {/* Profile Picture - Centered and Bigger */}
        <div className="profile-photo">
          <IonAvatar className="large-avatar">
            <IonImg src="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-1/471306862_2003547263499516_2833559459743607154_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFuW8ryA3khyrvGvR2JiR-r8srzBJTOjpHyyvMElM6OkeR_qk5x7hV4qOfOejRE86COq7ndJJpTEmRopVkqVBbM&_nc_ohc=qU2rp3SXEIEQ7kNvwESxL46&_nc_oc=Adm8n1NogAL5O3dnxJniUnemfKObxpx2hTAulEo_4bOxMflmyuAR3KaYD-OPoeMPebo&_nc_zt=24&_nc_ht=scontent-ams4-1.xx&_nc_gid=7o9hqcFMxU-YEE_BlDVu-Q&oh=00_AfLbyNFdkTjBWK6y_TEZmp2FHSs6_3X-Xt7dPD9bJE8rmw&oe=682A7D33" />
          </IonAvatar>
        </div>

        <IonList lines="none">
          {/* Facebook Contact Card */}
          <IonCard className="contact-card">
            <IonCardHeader>
              <IonCardTitle>Connect with Me on Facebook</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonButton expand="full" onClick={handleFacebookContact} color="primary">
                <IonIcon icon={logoFacebook} slot="start" />
                Message me on Facebook
              </IonButton>
            </IonCardContent>
          </IonCard>

          {/* Phone Contact Card */}
          <IonCard className="contact-card">
            <IonCardHeader>
              <IonCardTitle>Call Me</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem button onClick={handleCall}>
                <IonIcon icon={call} slot="start" />
                <IonLabel>0935-8560-253</IonLabel> {/* Replace with actual phone number */}
              </IonItem>
            </IonCardContent>
          </IonCard>

          {/* Address Card */}
          <IonCard className="contact-card">
            <IonCardHeader>
              <IonCardTitle>My address</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonIcon icon={pin} slot="start" />
                <IonLabel>
                  <IonText>
                    <h4>Manolo Fortich bukidnon</h4> {/* Replace with your actual address */}
                  </IonText>
                </IonLabel>
              </IonItem>
            </IonCardContent>
          </IonCard>

          {/* Personal Details */}
          <IonCard className="contact-card">
            <IonCardHeader>
              <IonCardTitle>Personal Details</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText>
                <p><strong>Lives in:</strong> Lunocan, Manolo Fortich, Bukidnon</p>
                <p><strong>Gender:</strong> Female</p>
                <p><strong>School:</strong></p>
                <ul>
                  <li><strong>Elementary:</strong> Lunocan Elementary School</li>
                  <li><strong>High School:</strong> Alae National High School</li>
                  <li><strong>College:</strong> Northern Bukidnon State College</li>
                </ul>
                <p><strong>Course:</strong>   Bachelor of Science in Information Technology (3rd Year Student)</p>
              </IonText>
            </IonCardContent>
          </IonCard>

          {/* Additional Information Card */}
          <IonCard className="contact-card">
            <IonCardHeader>
              <IonCardTitle>More Information</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText>
                <p>
                  I'm available via phone and Facebook
                </p>
                <p>
                  Don't hesitate to reach out, I’m here to help you with any questions you may have!
                </p>
              </IonText>
            </IonCardContent>
          </IonCard>
        </IonList>
      </IonContent>

      <style>
        {`
          .contact-page {
            padding: 0;
            margin: 0;
          }

          .profile-photo {
            display: flex;
            justify-content: center;
            margin-top: 40px; /* Add space above profile picture */
            margin-bottom: 20px;
          }

          .large-avatar {
            width: 150px;
            height: 150px;
            border: 5px solid white; /* Larger border for a more prominent look */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Add shadow to the avatar */
          }

          .ion-card {
            margin: 10px 0;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .contact-card .ion-card-header {
            background-color: #f7f7f7;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          }

          .ion-card-title {
            font-weight: bold;
            font-size: 16px;
            color: #333;
          }

          .ion-card-content {
            padding: 12px;
          }

          .ion-item {
            margin: 5px 0;
          }

          .ion-button {
            font-size: 14px;
            font-weight: normal;
          }

          ul {
            list-style-type: none;
            padding-left: 20px;
          }

          ul li {
            margin: 5px 0;
          }
        `}
      </style>
    </IonPage>
  );
};

export default Search;
