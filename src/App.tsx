import DisplayPassword from "./components/Display";
import Condition from "./components/Condition";
import React, {useState} from "react";
import {IState} from "../types";
import Alert from "./components/Alert";

// import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [condition, setCondition] = useState<IState>({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const generatePassword = () => {
    // return 1;
    let passwordLength = length;

    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";

    let password = "";

    // generate password with each condition
    if (condition.uppercase) {
      password += letters.toUpperCase();
    }

    if (condition.lowercase) {
      password += letters;
    }

    if (condition.numbers) {
      password += numbers;
    }

    if (condition.symbols) {
      password += symbols;
    }

    // generate password after each condition known
    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += password.charAt(
          Math.floor(Math.random() * password.length)
      );
    }
    setPassword(generatedPassword);
  };

  console.log(`isCopied: ${isCopied}`);
  return (
      <main className="max-w-lg  mx-auto flex  flex-col h-screen justify-center items-center px-5 my-5 md:my-0">
        <h1 className="text-center text-xl md:text-3xl   text-slate-500 font-bold">
          Password Generator
        </h1>
        <DisplayPassword
            password={password}
            setIsCopied={setIsCopied}
        />
        <Condition
            length={length}
            setLength={setLength}
            condition={condition}
            setCondition={setCondition}
            generatePassword={generatePassword}
        />
        {isCopied && <Alert message="Password Copied!" type="success" show={isCopied}/>}

      </main>
  );
}

export default App;
