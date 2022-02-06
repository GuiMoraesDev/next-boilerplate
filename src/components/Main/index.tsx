import * as Styles from './styles';

const Main = () => {
  return (
    <Styles.Container>
      <Styles.Logo
        src="/img/logo.svg"
        alt="pink hex with an withe atom centralized"
      />

      <Styles.Title>Advanced React</Styles.Title>

      <Styles.Description>
        Typescript, ReactJs, NextJs and Styled Components
      </Styles.Description>

      <Styles.Illustration
        src="/img/hero-illustration.svg"
        alt="A developer sit in a workstation with three screens in front of him"
      />
    </Styles.Container>
  );
};

export default Main;
