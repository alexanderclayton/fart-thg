//import//
import { useState } from "react";
import { auth } from "../firebase/firebaseAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

export const SignIn: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModal(!modal);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const signIn = async (): Promise<void> => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
        console.log("Success!")
        setEmail("")
        setPassword("")
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/wrong-password") {
          console.log("Incorrect Password!");
        } else if (error.code === "auth/user-not-found") {
          console.log("No user with that email found!");
        } else if (error.code === "auth/invalid-email") {
          console.log("Must enter a valid email!");
        } else {
          console.error(error.code as string);
          console.log("Error signing in user!");
        }
      }
    }
  };

  return (
    <div>
      <button onClick={handleModal}>Sign In</button>
      <div>
        <input
          type="text"
          placeholder="Email..."
          onChange={handleEmail}
          value={email}
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={handlePassword}
          value={password}
        />
        <button onClick={signIn}>Sign In</button>
      </div>
    </div>
  );
};
