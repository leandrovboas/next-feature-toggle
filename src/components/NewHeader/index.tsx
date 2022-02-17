import { useFeatureToggle } from "../../hooks/useFeatureToggle";
import NavLink from "../UI/NavLink";
import { Container } from "./styles";
import { componentEnum } from "../../utils/enum";

function Header() {
  const [isDisabled] = useFeatureToggle();

  if (isDisabled(componentEnum.NewHeader)) {
    return null;
  }
  return (
    <Container>
      <p>My New Header</p>
      <ul>
        <NavLink title="NewHome" path="/" />
        <NavLink title="Projetos" path="/projetos" />
      </ul>
    </Container>
  );
}

export default Header;
