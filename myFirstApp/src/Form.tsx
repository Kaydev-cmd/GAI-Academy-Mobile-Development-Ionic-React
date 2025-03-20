import React from "react";
import { useForm } from "react-hook-form";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    alert(`Form Submitted! Name: ${data.name}, Email: ${data.email}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonList>
            {/* Full Name Field */}
            <IonItem>
              <IonLabel position="stacked">Full Name:</IonLabel>
              <IonInput
                placeholder="Enter your name"
                {...register("name", { required: "Name is required!" })}
              ></IonInput>
            </IonItem>
            {errors.name && (
              <p style={{ color: "red", marginLeft: "16px" }}>
                {errors.name.message}
              </p>
            )}

            {/* Email Field */}
            <IonItem>
              <IonLabel position="stacked">Enter your email address:</IonLabel>
              <IonInput
                placeholder="Enter your email address"
                type="email"
                {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
              ></IonInput>
            </IonItem>
            {errors.email && (
              <p style={{ color: "red", marginLeft: "16px" }}>
                {errors.email.message}
              </p>
            )}
          </IonList>

          {/* Submit Button */}
          <IonButton expand="full" type="submit" className="custom-btn">
            Submit
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Form;
