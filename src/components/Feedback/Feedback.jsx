import * as s from './Feedback.styled';

export const Feedback = ({ onLeaveFeedback, options }) => {
  return (
    <s.List>
      {options.map((el, index) => (
        <s.Items key={index}>
          <button type="button" onClick={() => onLeaveFeedback(el)}>
            {el}
          </button>
        </s.Items>
      ))}
    </s.List>
  );
};
