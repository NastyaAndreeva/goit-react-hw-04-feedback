import PropTypes from 'prop-types';
import { FeedbackList, FeedbackButton } from './FeedbackOptionsStyled';
import { Section } from 'components/ui/Section';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Section title="Please, leave feedback">
    <FeedbackList>
      {options.map(option => (
        <li key={option}>
          <FeedbackButton type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </FeedbackButton>
        </li>
      ))}
    </FeedbackList>
  </Section>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
