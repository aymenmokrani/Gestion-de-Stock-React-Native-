import React from 'react'
import { Button, Icon, Text, View } from 'native-base'
import { TextInput } from 'react-native-paper'
import { useDataLayerValue } from '../../../utils/DataLayer'
import { dispatchTypes } from "../../../utils/dispatchTypes"

function ControlInput({parent, child}) {

    //console.log(value)

    const [{ [parent]: gotten }, dispatch] = useDataLayerValue()
    const value = child ? gotten[child] : gotten.sold
    console.log(gotten);
    const valueModifer = child ? 
                         dispatchTypes[parent][child].value : 
                         dispatchTypes[parent].value
    const title = child ? 
                  dispatchTypes[parent][child].title :
                  dispatchTypes[parent].title
    const type = child ?
                 dispatchTypes[parent][child].dispatch :
                 dispatchTypes[parent].dispatch 
    console.log(value);
    
    

    const increment = () => {
        dispatch({
            type: type,
            payload: value + valueModifer
        })

    }

    const decrement = () => {
        dispatch({
            type: type,
            payload: value > 0 ? value - valueModifer : 0
        })
    }
    


    return (
        <View style={{ flexDirection: 'row', 
                       alignItems: 'center',
                       justifyContent: 'space-between',
                       width: '100%'}}>
            <Text>{title}</Text>
            <View style={{ flexDirection: 'row', 
                           alignItems: 'center' }}>
                <Button transparent
                        onPress={increment}>
                    <Icon name="add"
                          style={{ color: 'green',
                                   fontSize: 22}}/>
                </Button>
                <TextInput value={`${value}`}
                           keyboardType="numeric"
                           disabled
                           style={{marginHorizontal: 10, height: 30, width: 70}}/>
                <Button transparent
                        onPress={decrement}>
                    <Icon name="remove"
                          style={{ color: 'red',
                                   fontSize: 22}} />
                </Button>
            </View>
        </View>
    )
}

export default ControlInput
