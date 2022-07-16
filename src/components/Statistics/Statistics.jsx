import PropTypes from 'prop-types';
import { StatisticList } from './StatisticList/StatisticList.styled';
import { Section } from 'components/ui/Section';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Section title="Statistics">
      <StatisticList>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}</li>
      </StatisticList>
    </Section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
