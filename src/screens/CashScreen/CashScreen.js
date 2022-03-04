import { Body, Button, Card, CardItem, Container, Content, H3, Icon, Text, View } from 'native-base'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { TextInput } from 'react-native-paper'
import ControlInput from '../../components/card/ControlInput/ControlInput'
import { useDataLayerValue } from '../../utils/DataLayer'
import MCard from './MCard/MCard'



function CashScreen() {
    
    const [{msweats, mtshirts, charges}, dispatch] = useDataLayerValue()

    const allCharges = charges.negociation + charges.ads + charges.transport + charges.spends
    const total = msweats.sold*msweats.outPrice + mtshirts.sold*mtshirts.outPrice - allCharges
    const benefit = msweats.sold*msweats.benefit + mtshirts.sold*mtshirts.benefit - allCharges
    



    return (
        <ScrollView> 
            <Content style={{paddingVertical: 10, paddingHorizontal: 10}}>
                <View>
                    <MCard type="sweats"/>
                </View>
                <View>
                    <MCard type="tshirts"/>
                </View>
                <View>
                    <Card>
                        <CardItem bordered header>
                            <Text>Charges</Text>
                        </CardItem>
                        <CardItem bordered style={{flexDirection: 'column'}}>
                            <ControlInput parent="charges" child="negociation" />
                            <ControlInput parent="charges" child="transport" />
                            <ControlInput parent="charges" child="ads" />
                            <ControlInput parent="charges" child="spends" />
                        </CardItem>
                        <CardItem bordered footer>
                            <Text style={{color: 'red'}}>- {allCharges} DA</Text>
                        </CardItem>
                    </Card>
                </View>
                <View>
                    <Card>
                        <CardItem bordered header>
                            <Text>Total</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Text>{total} DA</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Text style={{color: 'green'}}
                            >+ {benefit} DA</Text>
                        </CardItem>
                    </Card>
                </View>
            </Content>
        </ScrollView>
    )
}

export default CashScreen
