import React, { useState } from "react";
import { IState } from "../../types";

type Props = {
  condition: IState;
  length: number;
};

const StrengthBar: React.FC<Props> = ({ condition, length }) => {
  const [score, setScore] = useState(0);

  console.log(condition);

  const generateLabelStrength = () => {
    if (length > 0 && length < 10) {
      return "Too Weak";
      // return score
      // setScore((prev) => prev + 1);
    } else if (length >= 10 && length <= 15) {
      return "Weak";
      // setScore((prev) => prev + 1);
    } else if (length > 15 && length < 20) {
      return "Medium";
      // setScore((prev) => prev + 1);
    } else if (length >= 20) {
      return "Strong";
      // setScore((prev) => prev + 1);
    }

    return "Too Weak";
  };

  console.log(`score: ${score}`);

  // const getPasswordStrength = () => {
  //   let score = 0;
  //   if (uppercase) {
  //     score += 1;
  //   }
  //   if (lowercase) {
  //     score += 1;
  //   }
  //   if (numbers) {
  //     score += 1;
  //   }
  //   if (symbols) {
  //     score += 2.5;
  //     // setStrength((prev) => prev + 2.5);
  //   }
  //   // setStrength(strength);
  //   // strength += Math.min(2, length / 8);
  //   // setStrength((prev) => prev + Math.min(2, length / 8));
  //   // setStrength(score + Math.min(2, length / 8));
  //   return score;
  // };

  // const strengthScore = getPasswordStrength();

  // // console.log(`strengthScore: ${strengthScore}`);
  // console.log(`strength: ${strength}`);

  const strengthLabel: any = generateLabelStrength();
  return (
    <div className="p-5   ">
      <div className="bg-gray-800 p-5 flex items-center justify-between">
        <strong className="uppercase text-sm md:text-base">strength</strong>
        <div className="flex items-center gap-2 ">
          <span className="text-sm md:text-base">{strengthLabel}</span>
          {/* <div className="w-2 h-6  bg-green-500 rounded-none"></div>
          <div className="w-2 h-6  bg-green-500 rounded-none"></div>
          <div className="w-2 h-6  bg-green-500 rounded-none"></div>
          <div className="w-2 h-6  bg-green-500 rounded-none"></div>
          <div className="w-2 h-6  bg-green-500 rounded-none"></div> */}
        </div>
      </div>
    </div>
  );
};

export default StrengthBar;
