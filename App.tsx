import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './comps/Header'
import SectionView from './comps/SectionView'

const App = () => {

  const Bai1 = () => {
    return (
      <View>
        <Header
          renderLeft={null}
          title={"Header"}
          renderRight={null}
        />
        <Header
          renderLeft={null}
          title={"Trang Chủ"}
          renderRight={""}
        />
        <Header
          renderLeft={null}
          title={""}
          renderRight={""}
        />
      </View>
    )
  }

  const Bai2 = () => {
    return (
      <View style={{flex: 1}}>
        <SectionView/>
      </View>
    )
  }

  return (
    // <Bai1/>
    <Bai2/>
  )
}

export default App

const styles = StyleSheet.create({})