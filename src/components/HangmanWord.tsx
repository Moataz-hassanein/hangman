import { HangmanWordProps } from "../types/types";

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div className="flex gap-2 text-6xl font-bold uppercase font-mono ">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="border-b-4 border-black border-solid">
          <span
            className={`${
              guessedLetters.includes(letter) || reveal
                ? "visible"
                : "invisible"
            } ${
              !guessedLetters.includes(letter) && reveal
                ? "text-red-600"
                : "text-black"
            } `}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
