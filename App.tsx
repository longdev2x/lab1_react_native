import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './comps/Header'
import SectionView from './comps/SectionView'

const App = () => {

  return (
    // <View>
    //   <Header
    //     renderLeft={null}
    //     title={"Header"}
    //     renderRight={null}
    //   />
    //   <Header
    //     renderLeft={null}
    //     title={"Trang Chủ"}
    //     renderRight={""}
    //   />
    //   <Header
    //     renderLeft={null}
    //     title={""}
    //     renderRight={""}
    //   />
    // </View>
    <View style={{flex: 1}}>
      <SectionView/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})