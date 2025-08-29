import { MapPin, ShoppingCart } from "phosphor-react";
import logoCoffeeDelivery from "../../assets/Logo Coffee Delivery.svg";
import {
  ButtonLocationContainer,
  ButtonShoppingCartContainer,
  HeaderContainer,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} />
      <nav>
        <ButtonLocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </ButtonLocationContainer>
        <ButtonShoppingCartContainer>
          <ShoppingCart size={22} weight="fill" />
        </ButtonShoppingCartContainer>
      </nav>
    </HeaderContainer>
  );
}
