import React from 'react'
import { View } from 'react-native'
import styles from './styles';
import Card from '../../components/card/Card'


export default function HomeScreen({ cards, images }) {
    return (            
        <View>                
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {cards.map(card => card.type == 0 && <Card color={card.color}
                                        type={0} 
                                        images={images}
                                        size={card.size} 
                                        key={Math.random()}/>)}
            </View>             
        </View>
    )
}