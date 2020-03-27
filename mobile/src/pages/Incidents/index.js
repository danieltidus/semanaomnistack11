import React from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import {Feather} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

import logImg from '../../assets/logo.png'
import styles from './styles'

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Detail')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logImg}/>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}> 0 Casos </Text>
        </Text>
      </View>

    <Text style={styles.title}>Bem vindo!</Text>
    <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>
    <FlatList 
      style={styles.incidentList} 
      data={[1,2,3]}
      showsVerticalScrollIndicator={false}
      keyExtractor={incident => String(incident)}
      renderItem={() => (
      <View style={styles.incident}>
        
        <Text style={styles.incidentProperty}>ONG: </Text>
        <Text style={styles.incidentValue}>APAD </Text>
        
        <Text style={styles.incidentProperty}>Caso: </Text>
        <Text style={styles.incidentValue}>Cadela atropelada </Text>

        <Text style={styles.incidentProperty}> Valor: </Text>
        <Text style={styles.incidentValue}> R$ 120,00 </Text>
        
        <TouchableOpacity style={styles.detailsButtom} onPress={navigateToDetail}>
          <Text style={styles.detailsButtomText}> Ver mais detalhes</Text>
          <Feather name="arrow-right" size={16} color="#e02041"></Feather>
        </TouchableOpacity>
      </View>
      )}
    />

    </View>
    
  )
}