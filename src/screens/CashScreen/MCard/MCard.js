import React from 'react'
import { View, Text, Body, Button, Card, CardItem, H3, Icon } from 'native-base'
import { TextInput } from 'react-native-paper'
import { useDataLayerValue } from '../../../utils/DataLayer'


function MCard({type}) {

    const [{msweats, mtshirts}, dispatch] = useDataLayerValue()

    const title = type=="sweats" ? "Sweats" : "Tshirts"
    const article = type=="sweats" ? msweats : mtshirts
    const setArticle = type=="sweats" ? "SET_SWEATS" : "SET_TSHIRTS"
    const solds = article.sold
    const total = solds*article.outPrice
    const gains = solds*article.outPrice - solds*article.inPrice

    
    

    const incrementValue = () => {
        dispatch({
            type: setArticle,
            payload: solds + 1
        })
    }

    const decrementValue = () => {
        solds > 0 &&
        dispatch({
            type: setArticle,
            payload:  solds - 1
        })
    }


    return (
        <View>
            <Card>

                {/* HEADER */}

                <CardItem bordered header style={{justifyContent: 'space-between'}}>
                    {/* TITLE */}
                    <Text>{title}</Text>
                    <Icon name="edit" type="FontAwesome"/>
                    
                </CardItem>

                {/* BODY */}

                <CardItem bordered>
                    <Body style={{alignItems: 'center'}}>
                        {/* CONTROLS */}
                        { type &&
                        <View style={{ flexDirection: 'row', 
                                        alignItems: 'center' }}>
                            <Button transparent
                                    onPress={incrementValue}
                                    >
                                <Icon name="add"
                                        style={{ color: 'green',
                                            fontSize: 22
                                            }}
                                />
                            </Button>
                            <TextInput value={`${solds}`}
                                       keyboardType="numeric"
                                       disabled
                                       style={{marginHorizontal: 10, height: 30, width: 50}}
                            />
                            <Button transparent
                                     onPress={decrementValue}
                                    >
                                <Icon name="remove"
                                        style={{ color: 'red',
                                        fontSize: 22
                                        }} 
                                />
                            </Button>
                        </View>
                        }
                        {/* VALUE */}
                        <View style={{marginTop: 12}}>
                            <H3>{total} DA</H3>
                        </View>
                    </Body>
                </CardItem>

                {/* FOOTER */}

                <CardItem bordered>
                    {/* GAIN */}
                    <Text style={{color: 'green'}}>+ {gains} DA</Text>
                </CardItem>
            </Card>
        </View>
    )
}

export default MCard
