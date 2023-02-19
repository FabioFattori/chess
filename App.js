import { StyleSheet, Text, View } from 'react-native';
import PlayGround from './components/playGround';

export default function App() {
  return (
    <View style={styles.container}>
      <PlayGround />
    </View>
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
