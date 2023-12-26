import * as s from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <s.List>
      <s.Items>Good:{good}</s.Items>
      <s.Items>Neutral:{neutral} </s.Items>
      <s.Items>Bad:{bad} </s.Items>
      <s.Items>Total:{total} </s.Items>
      <s.Items>PositivePercentage:{positivePercentage} </s.Items>
    </s.List>
  );
};
