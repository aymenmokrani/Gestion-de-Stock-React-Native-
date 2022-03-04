import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import {  HomeScreen } from './src/screens'
import { ShirtScreen } from './src/screens'
import { CashScreen }  from './src/screens'
import {Font} from 'expo'
import { Ionicons } from '@expo/vector-icons';

import {  LogBox, StyleSheet, Text, View } from 'react-native';

import database from '@react-native-firebase/database'
import { Icon, Button, FooterTab, Tabs, Container, Header, Body, Title, Content, Footer } from 'native-base';
import { firebase } from './src/firebase/config'
import {SweatImages, TshirtImages} from './src/utils/images'
import {cards} from './src/utils/dataBank'
import { DataLayer } from './src/utils/DataLayer';
import reducer, { initialState } from './src/utils/reducer';


const App = () => {

  const stock = firebase.firestore().collection("clothes");

  const [products, setProducts] = useState([])

  useEffect(() => {
    firebase.firestore().collection("clothes")
            .onSnapshot((querySnapshot) => {
                const newProducts = []
                querySnapshot.forEach((doc) => {
                    const newProduct = doc.data()
                    newProduct.id = doc.id
                    newProducts.push(newProduct)
                })
                setProducts(newProducts)
            }, error => console.log(error))
}, [])



  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ])

  const [index, setIndex] = useState(2)
  const CurrentScreen = [HomeScreen, ShirtScreen, CashScreen]
  

  
  return (
    <React.Fragment>
      <DataLayer initialState={initialState} reducer={reducer}>
        <Container>
          <Header>
            <Body>
              <Title>Grifa Clothes</Title>
            </Body>
          </Header>

          <Content>
            {index == 0 ? 
            <HomeScreen cards={cards} images={SweatImages}/> 
            : index == 1 ? 
            <ShirtScreen cards={cards} images={TshirtImages} /> : 
            <CashScreen />}
          </Content>

          <Footer>
            <FooterTab>
              <Button vertical
                      active = {index == 0}
                      onPress={() => setIndex(0)}>
                <Icon name="body"/>
                <Text style={{color: 'white'}}>Sweats</Text>
              </Button>
              <Button vertical
                      active = {index == 1}
                      onPress={() => setIndex(1)}>
                <Icon name="shirt"/>
                <Text style={{color: 'white'}}>T-shirts</Text>
              </Button>
              <Button vertical
                      active = {index == 2}
                      onPress={() => setIndex(2)}>
                <Icon name="cash"/>
                <Text style={{color: 'white'}}>Calculator</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </DataLayer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default App;