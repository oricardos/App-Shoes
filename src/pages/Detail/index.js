import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Dot from "../../component/Dot";
import SizeButton from "../../component/SizeButton";
import Button from "../../component/Button";
import Footer from "../../component/Footer";

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Nike",
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/detail.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$ 280,90</Text>
        </View>
      </View>

      <View>
        <View opacity={0.2}>
          <Text style={[styles.title, { fontSize: 30 }]}>Nike</Text>
      </View>

      <View style={styles.dotContainer}>
        <Dot color="#DFE2E6" />
        <Dot color="#D7D3CB" />
        <Dot color="#1A2B53" />
        <Dot color="#547450" />
        <Dot color="#353437" />
      </View>

      <View style={{flexDirection: 'row', width:'100%'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SizeButton bgColor="#17181A" color="#FFF">37</SizeButton>
          <SizeButton>38</SizeButton>
          <SizeButton>39</SizeButton>
          <SizeButton>40</SizeButton>
          <SizeButton>41</SizeButton>
          <SizeButton>42</SizeButton>
          <SizeButton>43</SizeButton>
          <SizeButton>44</SizeButton>
        </ScrollView>
      </View>

      <View style={styles.textContent}>
        <Text style={styles.textTitle}>
          Nike
        </Text>

        <Text style={styles.textContent}>
          O Nike Air Force 1 '07 x Space Jam: Um Novo Legado celebra o icônico filme de basquete. Apresentando uma nova versão dos detalhes que você já conhece: camadas sobrepostas costuradas, cores ousadas e o estilo hoops na quantidade ideal para causar impacto.
        </Text>

        <View opacity={0.5}>
          <Text style={styles.textList}>
            - Categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            - Material: Mesh
          </Text>
        </View>

        <Button />

        <View style={styles.line}></View>

        <Footer />

      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%'
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#D8D8D8',
    marginVertical: '2%',
  }
});
