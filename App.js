
import { Button, ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState } from 'react';



import ProductList from './src/screens/ProductList';

//Ds truyền sang cho ProductList
const dataProduct = [
  { id: 1, name: '123', desc: '123', image: '../../../assets/avt.jpg' },
  { id: 2, name: '123', desc: '123', image: '../../../assets/avt.jpg' },
  { id: 3, name: '123', desc: '123', image: '../../../assets/avt.jpg' },

];

export default function App() {


  const [showHideView, setShowHideView] = useState(false);



  return (

    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.text}>Họ tên: Mai Chí Cường</Text>
        <Text style={styles.text}>MSV: PH27903</Text>
      </View>
      {showHideView
        ?
        <>
          <TextInput placeholder='Tên' />
          <TextInput placeholder='Mô tả' />
          <TextInput placeholder='Link ảnh' />
          <View style={styles.button}>
            <Button title='Hủy' onPress={() => setShowHideView(!showHideView)} />
            <Button title='lưu' />
          </View>
        </>

        :

        <Button
          title={'Thêm mới'}
          onPress={() => setShowHideView(!showHideView)}
        />
      }
      <View style={styles.list}>
      <ProductList data={dataProduct} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    margin:20,
  },
  info: {
    marginBottom:15,
  },
  text: {
    fontSize:25,
  },
  button: {
    flex: 0.1,
    flexDirection: "row",
    height: 30,
    justifyContent: "center",
  },
  list: {
    marginTop:20,
    borderWidth:1,
    borderRadius:10,
    padding: 20,
  },
});
