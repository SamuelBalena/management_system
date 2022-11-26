import { Paragraph } from "../../components/Text/Paragraph/styles";
import { Title } from "../../components/Text/Title/styles";
import { Container } from "./styles";

import AddIcon from "../../assets/img/add.svg";

export const AsideMenu = (): JSX.Element => (
  <Container>
    <ul>
      <li>
        <i>
          <img src={AddIcon} alt="Adicionar" />
        </i>
        <Paragraph color={"white"} size={"medium"} weight={"medium"}>
          Criar
        </Paragraph>
      </li>
    </ul>
  </Container>
);
