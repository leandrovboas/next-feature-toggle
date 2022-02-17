import { useFeatureToggle } from "../../hooks/useFeatureToggle";
import NavLink from "../UI/NavLink";
import { Container } from "./styles";
import { componentEnum } from "../../utils/enum";

function Header() {
  const [isDisabled] = useFeatureToggle();
  const componentName = componentEnum.Header;
  console.log(componentName);
  if (isDisabled(componentName)) {
    return null;
  }
  return (
    <Container>
      <p>My Header</p>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" />
      </ul>
    </Container>
  );
}

export default Header;
