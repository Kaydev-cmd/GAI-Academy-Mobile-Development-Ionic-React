import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonInput,
  IonButton,
} from "@ionic/react";
import { useState } from "react";

const Welcome: React.FC = () => {
  const [username, setUsername] = useState("Keamogetswi");
  const [message, setMessage] = useState("Welcome to Bootcamp!");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome {username}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        className="ion-padding"
        style={{ backgroundColor: "#f4f4f4" }}
      >
        <h1>{message}</h1>

        {/* Input field to change the username */}
        <IonInput
          placeholder="Enter your name"
          onIonChange={(e) => setUsername(e.detail.value!)}
          clearInput
        />

        {/* Button to update message */}
        <IonButton
          expand="full"
          onClick={() => setMessage("Let's start learning!")}
        >
          Update Message
        </IonButton>
        <footer>Day 1 Assignment</footer>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
