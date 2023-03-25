import React from "react";
import {IState} from "../../types";

type Props = {
  condition: IState;
  length: number;
};

const StrengthBar: React.FC<Props> = ({condition, length}) => {
  let strength = 0;
  const conditions = [condition.uppercase, condition.lowercase, condition.numbers, condition.symbols]

  const calculateStrength = () => {
    if (length > 0 && length <= 5) {
      if (conditions[0] || conditions[1]) {
        strength += 1
      }
      if (conditions[2] || conditions[3]) {
        strength += 1
      }
    } else if (length > 5 && length <= 10) {
      if (conditions[0] || conditions[1]) {
        strength += 2
      }
      if (conditions[2] || conditions[3]) {
        strength += 2
      }
    } else if (length > 10 && length <= 15) {
      if (conditions[0] || conditions[1]) {
        strength += 3
      }
      if (conditions[2] || conditions[3]) {
        strength += 3
      }
    } else if (length > 15 && length <= 20) {
      if (conditions[0] || conditions[1]) {
        strength += 4
      }
      if (conditions[2] || conditions[3]) {
        strength += 4
      }
    }
    // console.log(calculatedStrength)
  }
  calculateStrength()


  // console.log(`score: ${strength}`);

  const generateStrengthLabel = () => {
    if (strength < 2) {
      return "Too Weak";
    } else if (strength >= 2 && strength < 3) {
      return "Weak";
    } else if (strength >= 3 && strength < 6) {
      return "Medium";
    } else if (strength >= 6) {
      return "Strong";
    }
  }


  const renderStrengthBar = () => {
    let bar = [];
    for (let i = 0; i < 5; i++) {
      if (i < strength) {
        if (strength < 2) {
          bar.push(
              <div key={i} className="w-2 h-6  bg-red-500 rounded-none"></div>
          );
        } else if (strength >= 2 && strength < 4) {
          bar.push(
              <div key={i} className="w-2 h-6  bg-yellow-500 rounded-none"></div>
          );
        } else {
          bar.push(
              <div key={i} className="w-2 h-6  bg-green-500 rounded-none"></div>
          );
        }
      } else {
        bar.push(
            <div key={i} className="w-2 h-6  bg-gray-500 rounded-none"></div>
        );
      }
    }
    return bar;
  }

  const strengthLabel = generateStrengthLabel();
  const strengthBar = renderStrengthBar();

  return (
      <div className="p-5   ">
        <div className="bg-gray-800 p-5 flex items-center justify-between">
          <strong className="uppercase text-sm md:text-base">strength</strong>
          <div className="flex items-center gap-2 ">
            <span className="text-sm md:text-base">{strengthLabel}</span>
            {strengthBar}
          </div>
        </div>
      </div>
  );
};

export default StrengthBar;
