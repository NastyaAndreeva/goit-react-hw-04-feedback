import { Component } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Statistics } from './components/Statistics';
import { Notification } from 'components/ui/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option =>
    this.setState(state => ({ [option]: state[option] + 1 }));

  countTotalFeedback = () => {
    const {
      state: { good, neutral, bad },
    } = this;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return `${Math.round((good / total) * 100)}%`;
  };

  render() {
    const {
      state: { good, neutral, bad },
    } = this;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.leaveFeedback}
        />
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </>
    );
  }
}
