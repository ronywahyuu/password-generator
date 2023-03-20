import React, { useState } from "react";
import StrengthBar from "./StrengthBar";
import { IState } from "../../types/index";

type Props = {
  length: number;
  setLength: React.Dispatch<React.SetStateAction<number>>;
  condition: IState;
  setCondition: React.Dispatch<React.SetStateAction<IState>>;
  generatePassword: () => void;
};

// console.log(typeof Strength);
const Condition: React.FC<Props> = ({
  generatePassword,
  length,
  setLength,
  condition,
  setCondition,
}) => {
  // const [condition, setCondition] = useState<IState>({
  //   uppercase: false,
  //   lowercase: false,
  //   numbers: false,
  //   symbols: false,
  // });

  const [strength, setStrength] = useState(0);
  // console.log(uppercase);

  const { uppercase, lowercase, numbers, symbols } = condition;

  // console.log(condition);
  const isAtLeastOneChecked = () => {
    if ((uppercase || lowercase || numbers || symbols) && length > 0) {
      return true;
    }
    return false;
  };

  // console.log(isAtLeastOneChecked());

  const handleGeneratePassword = () => {
    if (isAtLeastOneChecked()) {
      generatePassword();
    }
    console.log("generate");
  };

  // console.log(length);
  // console.log(uppercase || lowercase || numbers || symbols);
  return (
    <div className="w-full  bg-[#24232A] ">
      {/*<input type="text" className="border w-full  p-2 border-none focus:outline-none text-slate-400 font-bold rounded-sm" value="P4s5W0Rd!"/>*/}

      <div className="p-5 ">
        <label
          htmlFor="length"
          className="text-slate-300 flex items-center justify-between mb-5 "
        >
          <span className="text-xl">Character Length</span>
          <span className=" font-bold ml-2 text-[#98FFAF]   text-2xl">
            {length}
          </span>
        </label>

        <input
          type="range"
          name="length"
          id="length"
          min="0"
          max="20"
          defaultValue={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full  "
        />
      </div>

      {/*  checkbox condition*/}
      <div className="p-5  flex flex-col gap-4 font-medium ">
        <div className="flex items-center flex-row-reverse justify-end gap-3 ">
          <label
            htmlFor="uppercase"
            className="text-slate-300 text-lg md:text-xl"
          >
            Include Uppercase Letters
          </label>
          <input
            type="checkbox"
            name="uppercase"
            id="uppercase"
            defaultChecked={uppercase}
            // onChange={(e) => setUppercase(e.target.checked)}
            onChange={(e) =>
              setCondition({ ...condition, uppercase: e.target.checked })
            }
            className="form-checkbox h-6 w-6 text-emerald-300"
          />
        </div>
        <div className="flex items-center flex-row-reverse justify-end gap-3 ">
          <label
            htmlFor="lowercase"
            className="text-slate-300 text-lg md:text-xl"
          >
            Include Lowercase Letters
          </label>
          <input
            type="checkbox"
            name="lowercase"
            id="lowercase"
            defaultChecked={lowercase}
            onChange={(e) =>
              setCondition({ ...condition, lowercase: e.target.checked })
            }
            className="form-checkbox h-6 w-6 text-emerald-300"
          />
        </div>
        <div className="flex items-center flex-row-reverse justify-end gap-3 ">
          <label
            htmlFor="numbers"
            className="text-slate-300 text-lg md:text-xl"
          >
            Include Numbers
          </label>
          <input
            type="checkbox"
            name="numbers"
            id="numbers"
            defaultChecked={numbers}
            onChange={(e) =>
              setCondition({ ...condition, numbers: e.target.checked })
            }
            className="form-checkbox h-6 w-6 text-emerald-300"
          />
        </div>
        <div className="flex items-center flex-row-reverse justify-end gap-3 ">
          <label
            htmlFor="symbols"
            className="text-slate-300 text-lg md:text-xl"
          >
            Include Symbols
          </label>
          <input
            type="checkbox"
            name="symbols"
            id="symbols"
            defaultChecked={symbols}
            onChange={(e) =>
              setCondition({ ...condition, symbols: e.target.checked })
            }
            className="form-checkbox h-6 w-6 text-emerald-300"
          />
        </div>
      </div>

      {/*  strength display*/}
      <StrengthBar length={length} condition={condition} />

      {/*  generate button*/}
      <div className="p-5  flex flex-col gap-4 ">
        <div className="flex items-center flex-row-reverse justify-end gap-3 ">
          <button
            // {...(isAtLeastOneChecked() ? {} : { disabled: true })}
            {...(isAtLeastOneChecked() ? {} : { disabled: true })}
            onClick={handleGeneratePassword}
            className={`bg-emerald-300 w-full text-slate-700 text-xl font-bold px-4 py-2 rounded-md hover:bg-emerald-400 ${
              isAtLeastOneChecked() ? "" : "opacity-50 cursor-not-allowed "
            }`}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Condition;
