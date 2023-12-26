import * as s from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <s.Container>
      <h2>{title}</h2>
      {children}
    </s.Container>
  );
};
