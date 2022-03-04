import { View } from 'native-base'
import React from 'react'
import Card from '../../components/card/Card'


export default function ShirtScreen({ cards, images }) {
    return (
        <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {cards.map(card => card.type == 1 && <Card color={card.color} 
                                        type={1} 
                                        images={images}
                                        size={card.size} 
                                        key={Math.random()}/>)}
            </View> 
        </View>
    )
}

 
