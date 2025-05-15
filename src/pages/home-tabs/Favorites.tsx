import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardContent, 
  IonText 
} from '@ionic/react';

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '30px 20px',
            backgroundColor: '#f7f7f7',
            minHeight: '100vh',  
            overflowY: 'auto',
          }}
        >
          {/* Favorite Food Card */}
          <IonCard 
            style={{
              width: '100%',
              maxWidth: '600px',
              marginBottom: '25px',
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              padding: '20px',
              textAlign: 'center',
              backgroundColor: '#FFEBEE',
            }}
            onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <IonCardHeader 
              style={{
                backgroundColor: '#FF6F61', 
                color: '#fff', 
                borderTopLeftRadius: '15px', 
                borderTopRightRadius: '15px', 
                padding: '15px', 
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              <IonTitle>My Favorite Food</IonTitle>
            </IonCardHeader>
            <IonCardContent 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '20px',
                }}
              >
                <div 
                  style={{
                    backgroundColor: '#FF6F61', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  🍕 Pizza
                </div>
                <div 
                  style={{
                    backgroundColor: '#4CAF50', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  🍣 Sushi
                </div>
                <div 
                  style={{
                    backgroundColor: '#FFC107', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  🍦 Ice Cream
                </div>
              </div>
            </IonCardContent>
          </IonCard>

          {/* Favorite Places Card */}
          <IonCard 
            style={{
              width: '100%',
              maxWidth: '600px',
              marginBottom: '25px',
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              padding: '20px',
              textAlign: 'center',
              backgroundColor: '#E8F5E9',
            }}
            onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <IonCardHeader 
              style={{
                backgroundColor: '#4CAF50', 
                color: '#fff', 
                borderTopLeftRadius: '15px', 
                borderTopRightRadius: '15px', 
                padding: '15px', 
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              <IonTitle>My Favorite Places</IonTitle>
            </IonCardHeader>
            <IonCardContent 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '20px',
                }}
              >
                <div 
                  style={{
                    backgroundColor: '#4CAF50', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  🗼 Tokyo
                </div>
                <div 
                  style={{
                    backgroundColor: '#FF5722', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  🗽 New York
                </div>
                <div 
                  style={{
                    backgroundColor: '#9C27B0', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  🌆 Paris
                </div>
              </div>
            </IonCardContent>
          </IonCard>

          {/* Favorite Books Card */}
          <IonCard 
            style={{
              width: '100%',
              maxWidth: '600px',
              marginBottom: '25px',
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              padding: '20px',
              textAlign: 'center',
              backgroundColor: '#E3F2FD',
            }}
            onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <IonCardHeader 
              style={{
                backgroundColor: '#2196F3', 
                color: '#fff', 
                borderTopLeftRadius: '15px', 
                borderTopRightRadius: '15px', 
                padding: '15px', 
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              <IonTitle>My Favorite Books</IonTitle>
            </IonCardHeader>
            <IonCardContent 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '20px',
                }}
              >
                <div 
                  style={{
                    backgroundColor: '#2196F3', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  📚 The Great Gatsby
                </div>
                <div 
                  style={{
                    backgroundColor: '#FFC107', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  📖 1984
                </div>
                <div 
                  style={{
                    backgroundColor: '#9C27B0', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  📖 To Kill a Mockingbird
                </div>
              </div>
            </IonCardContent>
          </IonCard>

          {/* Favorite Shows Card */}
          <IonCard 
            style={{
              width: '100%',
              maxWidth: '600px',
              marginBottom: '25px',
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              padding: '20px',
              textAlign: 'center',
              backgroundColor: '#F1F8E9',
            }}
            onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <IonCardHeader 
              style={{
                backgroundColor: '#8BC34A', 
                color: '#fff', 
                borderTopLeftRadius: '15px', 
                borderTopRightRadius: '15px', 
                padding: '15px', 
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              <IonTitle>My Favorite Shows</IonTitle>
            </IonCardHeader>
            <IonCardContent 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '20px',
                }}
              >
                <div 
                  style={{
                    backgroundColor: '#8BC34A', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  📺 Breaking Bad
                </div>
                <div 
                  style={{
                    backgroundColor: '#FF9800', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  📺 Stranger Things
                </div>
                <div 
                  style={{
                    backgroundColor: '#673AB7', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  📺 Friends
                </div>
              </div>
            </IonCardContent>
          </IonCard>

          {/* Favorite Hobbies Card */}
          <IonCard 
            style={{
              width: '100%',
              maxWidth: '600px',
              marginBottom: '25px',
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              padding: '20px',
              textAlign: 'center',
              backgroundColor: '#FBE9E7',
            }}
            onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <IonCardHeader 
              style={{
                backgroundColor: '#FF5722', 
                color: '#fff', 
                borderTopLeftRadius: '15px', 
                borderTopRightRadius: '15px', 
                padding: '15px', 
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              <IonTitle>My Favorite Hobbies</IonTitle>
            </IonCardHeader>
            <IonCardContent 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}
            >
              <div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '20px',
                }}
              >
                <div 
                  style={{
                    backgroundColor: '#FF5722', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  🎨 Painting
                </div>
                <div 
                  style={{
                    backgroundColor: '#9C27B0', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  🎸 Playing Guitar
                </div>
                <div 
                  style={{
                    backgroundColor: '#00BCD4', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '10px',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e: any) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  🏃‍♂️ Running
                </div>
              </div>
            </IonCardContent>
          </IonCard>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
