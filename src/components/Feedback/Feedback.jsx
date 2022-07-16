// import PropTypes from 'prop-types';
import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';
import { Notification } from 'components/ui/Notification';

export class Feedback extends Component {
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
    const {
      state: { good, neutral, bad },
    } = this;
    return `${Math.round((good / (good + neutral + bad)) * 100)}%`;
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
          options={{ good: 'good', bad: 'bad', neutral: 'neutral' }}
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
