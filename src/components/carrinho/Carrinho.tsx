import { ShoppingCart } from "phosphor-react";
import { Button, Count, Icon } from "./style";

export default function Carrinho() {
    return(
        <Button>
            <Icon>
                <ShoppingCart size={20}/>
            </Icon>
            <Count> 0 </Count>
        </Button>
    )
}