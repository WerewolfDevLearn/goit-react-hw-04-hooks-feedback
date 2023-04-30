import { nanoid } from "nanoid";
import FeedbackOptionsStl from "./FeedbackOptions.module.css";

interface IFeedbackOPTProps {
  options: string[];
  arrOfFunc: (() => void)[];
}

export default function FeedbackOptions({ options, arrOfFunc }: IFeedbackOPTProps) {
  return (
    <div>
      {options.map((option, idx) => (
        <button type='button' key={nanoid()} className={FeedbackOptionsStl.button} onClick={arrOfFunc[idx]}>
          {option}
        </button>
      ))}
    </div>
  );
}
