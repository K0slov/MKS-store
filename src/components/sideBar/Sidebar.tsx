import { XCircle } from "phosphor-react";
import BuyCard from "../buyCard/buyCard";
import { Base, Divisor, Divisor2, Finilly, Text } from "./style";

export default function Sidebar() {
    return (
        <Base>
            <Divisor>
                <Text>Carrinho <br/> de compras</Text>
                <XCircle size={36} color="#000000" />
            </Divisor>
            <Divisor2>
                <BuyCard id={0} name={"XXXXXXX"} description={''} price={999} photo={""} />
                <BuyCard id={0} name={"xxxx XXXxx"} description={""} price={100} photo={""} />
                <BuyCard id={0} name={"Xxxxxx xx X"} description={""} price={8} photo={""} />
            </Divisor2>
            <Divisor>
                <Text>Total:</Text>
                <Text>R$999</Text>
            </Divisor>
            <Finilly>
                <Text> Finalizar Compra</Text>
            </Finilly>
        </Base>
    )
}