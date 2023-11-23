import { HangmanDrawingProps } from "../types/types";

const HEAD = (
  <div className="w-[70px] h-[70px] rounded-full border-[10px] border-solid border-black absolute top-[50px] right-[-30px] "></div>
);

const BODY = (
  <div className="w-[10px] h-[100px] bg-black  absolute top-[120px] right-0 "></div>
);

const RIGHT_ARM = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[-100px] rotate-[-30deg] origin-bottom-left "></div>
);

const LEFT_ARM = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[10px] rotate-[30deg] origin-bottom-right "></div>
);

const RIGHT_LEG = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[210px] right-[-90px] rotate-[60deg] origin-bottom-left "></div>
);

const LEFT_LEG = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[210px] right-0 rotate-[-60deg] origin-bottom-right "></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="h-[50px] w-[10px] bg-black top-0 right-0 absolute " />
      <div className="h-[10px] w-[200px] bg-black ml-[120px] " />
      <div className="h-[400px] w-[10px] bg-black ml-[120px]  " />
      <div className="h-[10px] w-[250px] bg-black " />
    </div>
  );
};

export default HangmanDrawing;
