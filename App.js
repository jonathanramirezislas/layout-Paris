import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {baseUrl} from './shared/baseUrl';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.banner}
            source={{uri: baseUrl + 'bg_tdtfqh.jpg'}}
          />
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Qué hacer en Paris</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.ciudad}
                source={{uri: baseUrl + 'actividad1_axqvf4.jpg'}}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={{uri: baseUrl + 'actividad2_mrqsql.jpg'}}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={{uri: baseUrl + 'actividad3_uc4cub.jpg'}}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={{uri: baseUrl + 'actividad4_zqucve.jpg'}}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={{uri: baseUrl + 'actividad5_vznnmz.jpg'}}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Los Mejores Alojamientos</Text>
          <View>
            <View>
              <Image
                style={styles.mejores}
                source={{uri: baseUrl + 'mejores1_yxbzgo.jpg'}}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={{uri: baseUrl + 'mejores2_xm2jku.jpg'}}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={{uri: baseUrl + 'mejores3_nwlsot.jpg'}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
    mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
});

export default App;
