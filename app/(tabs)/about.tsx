import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function AboutScreen() {
  const appVersion = '1.0.0'; 
  const developerName = 'Raijin';

  return (
    <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.container}>
      {/* App Logo and Name */}
      <Image
        source={require('@/assets/images/Ameer.png')} 
        style={styles.appLogo}
        resizeMode="contain"
      />
      
      <Text style={styles.appName}>Raijin Todo</Text>
      <Text style={styles.appVersion}>Version {appVersion}</Text>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About This App</Text>
        <Text style={styles.sectionText}>
          This is my first practice React Native app using Expo.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© {new Date().getFullYear()} {developerName}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  
  },
  container: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 40, // Add some padding at the bottom for scroll
  },
  appLogo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 20, // Example: if your logo is a square
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  appVersion: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  section: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // For Android shadow
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#999',
  },
});
