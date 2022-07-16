import Card from '../card/Card'
import { Div2, DivColumn, DivRow, Li, Ul } from './style'
import { useApi } from '../../hooks/useApi'

type Repository = {
    id: number
    name: string
    description: string
    price: number
    photo: string
}

type CountList = {
    count: number;
    products: Array <Repository>;
}

export default function List() {
    const { listProducts : produtos, isRunning } = useApi<CountList>('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
    
    return (  
        <Div2>
            <Ul>
                {isRunning  && <span>Carregando...</span>}
                {produtos?.products.map(card => {
                    return(
                        <Li key={card.id}>
                            <DivColumn>
                                <DivRow>
                                    <Card id={card.id} name={card.name} description={card.description} price={card.price} photo={card.photo}/>
                                </DivRow>                   
                            </DivColumn> 
                        </Li>
                    )
                })}
            </Ul>
        </Div2>
    )

}