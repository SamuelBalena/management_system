import { ApartamentCard } from "../../components/Cards/ApartamentCard";
import { Container } from "./styles";

export const ApartamentList = (): JSX.Element => (
  <Container>
    <ul>
      <li>
        <ApartamentCard />
      </li>
      <li>
        <ApartamentCard />
      </li>
      <li>
        <ApartamentCard />
      </li>
    </ul>
  </Container>
);
