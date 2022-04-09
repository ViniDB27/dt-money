import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onButtonClick: () => void;
}

export function Header({ onButtonClick }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={onButtonClick} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
