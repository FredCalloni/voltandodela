import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome:</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.text}>Gênero:</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.text}>Data de nascimento:</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.text}>Usuário:</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.text}>Senha:</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.text}>Email:</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.text}>Confirmar email:</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.text}>CPF:</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.text}>Idioma do curso:</Text>
      <TextInput style={styles.input}/>
      <TouchableOpacity style={styles.button}><Text>CONFIRMAR</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'left',
    justifyContent: 'center',
    margin: 14,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    borderColor: 'black',
    backgroundColor: '#e9e9e9',
  },
  text: {
    marginTop: 8,
  },
  button: {
    alignItems: 'center',
    height: 40,
    width: 160,
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 20,
    marginHorizontal: 110,
    padding: 10,
    borderColor: 'black',
    backgroundColor: '#f08080'
  }
});
