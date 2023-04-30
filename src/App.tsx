import useStates from "./Hooks/useStates";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOption/FeedbackOption";
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";
interface State {
  [key: string]: number;
}
export default function App() {
  const options = ["good", "neutral", "bad"];
  const [good, updateGood] = useStates(0);
  const [neutral, updateNeutral] = useStates(0);
  const [bad, updateBad] = useStates(0);
  const arrOfFunc = [updateGood, updateNeutral, updateBad];
  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const ratio = Math.round((good / total) * 100);
    return ratio;
  };

  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={options} arrOfFunc={arrOfFunc} />
      </Section>

      {total === 0 ? (
        <Notification massage={"No feedback given"} />
      ) : (
        <Section title='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
}
