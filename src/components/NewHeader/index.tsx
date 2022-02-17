import NavLink from "../UI/NavLink";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <p>My New Header</p>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" />
      </ul>
    </Container>
  );
}

export default Header;
