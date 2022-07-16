import { BuyButton, BuyText, Description, DivContent, DivValor, Img, Item, NameItem, Valor } from "./style";
import { ShoppingBagOpen } from "phosphor-react";

interface Repository {
    id: number
    name: string
    description: string
    price: number
    photo: string
}
export default function Card( {photo, name, price, description} : Repository ) {

     return(
                  
            <Item>
                <DivContent>
                    <Img src={photo} />
                </DivContent>
                <DivContent>
                    <NameItem>{name}</NameItem>
                    <DivValor>
                        <Valor>{price}</Valor>
                    </DivValor>
                </DivContent>
                <DivContent>
                    <Description>{description}</Description>
                </DivContent>
                <BuyButton>
                    <DivContent>
                        <BuyText>
                            <ShoppingBagOpen size={18} />  Comprar
                        </BuyText>
                    </DivContent>
                </BuyButton>
            </Item>
            )}

