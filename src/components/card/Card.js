import React from 'react'
import { Badge, Card, CardItem, Icon, Text, View } from 'native-base';
import { Image } from 'react-native';


function card({color, size, images}) {

    const imgSrc = images.find(el => el.color == color).source
    
    return (
        <View style={{flex: 1, minWidth: '40%', maxWidth: '50%'}}>    
            <Card style={{elevation: 3}}>
                <CardItem header bordered>
                <Text>{color}</Text>
                </CardItem>
                <CardItem cardBody>
                <Image source= {{uri: imgSrc}} 
                        style={{height: 150, width: null, flex: 1, resizeMode: 'contain'}}/>
                </CardItem>
                <CardItem footer bordered>
                    <Text> 
                        {size.map(s => <Badge key={Math.random()}
                                              style={{transform: [{scale: .9}]}}>
                                            <Text>{s}</Text>
                                        </Badge>)}
                    </Text>
                </CardItem>
            </Card>
        </View>
    )
}

export default card


