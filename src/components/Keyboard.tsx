import { KeyboardProps } from "../types/types";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled,
}: KeyboardProps) => {
  return (
    <div className="self-stretch">
      <div className="grid grid-cols-auto-fit gap-2 ">
        {KEYS.map((key) => {
          const isActive = activeLetters.includes(key);
          const isInActive = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              key={Math.random()}
              className={`btn ${isActive ? "active" : ""} ${
                isInActive ? "inactive" : ""
              }`}
              disabled={isActive || isInActive || disabled}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
