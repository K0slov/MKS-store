import { AddSub, Adjust, Card, Close, DivSelect, Img, Input, Label, NameText, PriceText } from "./style";
import { XCircle } from "phosphor-react";

interface Repository {
    id: number
    name: string
    description: string
    price: number
    photo: string
}

export default function BuyCard({photo, name, price} :  Repository) {

    return (
        <Card>
            <Adjust>             
                <Img src={photo} />
            </Adjust>
            <Adjust>
                <NameText>{name}</NameText>                
            </Adjust>
            <Adjust>
                <Label>
                    qtd.
                    <DivSelect>
                        <AddSub>-</AddSub>
                        <Input type='number' value={1} />
                        <AddSub>+</AddSub>
                    </DivSelect>
                </Label>
            </Adjust>
            <Adjust>
                <PriceText>{price}</PriceText>
            </Adjust>
            <Close>
                <XCircle size={32} color="#ffffff" />
            </Close>
        </Card>
    )
}