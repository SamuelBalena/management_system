import { useRouteError } from "react-router-dom";
import { Paragraph } from "../../components/Text/Paragraph/styles";
import { Title } from "../../components/Text/Title/styles";
import { Container } from "./styles";

export const ErrorRouter = (): JSX.Element => {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <div>
        <Title>Ops!</Title>
        <Paragraph size={"big"}>
          A página que você está procurando não foi encontrada.
        </Paragraph>
      </div>
    </Container>
  );
};
