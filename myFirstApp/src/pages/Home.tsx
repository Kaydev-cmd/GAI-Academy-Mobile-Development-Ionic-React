import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <h2>Welcome to our first Ionic React App!</h2>
        <p>Use the tabss below to navigate between Home and the Form.</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
