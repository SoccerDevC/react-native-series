// import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

// const ParentDashboard = ({ navigation }) => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Header with Parent Info */}
//       <View style={styles.header}>
//         <Text style={styles.title}>Olukiiko Lwa Bazadde</Text>
//         <Text style={styles.subtitle}>(Parent Dashboard)</Text>
//       </View>

//       {/* Child Info */}
//       <View style={styles.profileContainer}>
//         <Image source={{ uri: 'https://example.com/avatar.png' }} style={styles.avatar} />
//         <View>
//           <Text style={styles.childName}>Kato - Munna Buganda</Text>
//           <Text style={styles.childLevel}>Ebitontome: Omusana (Level 5)</Text>
//         </View>
//       </View>

//       {/* Learning Progress */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Obuyiiya (Learning Progress)</Text>
//         <Text style={styles.sectionSubtext}>XP: 1200 / 1500</Text>
//         <View style={styles.progressBar}>
//           <View style={[styles.progressFill, { width: '80%' }]} />
//         </View>
//       </View>

//       {/* Completed Activities */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Ebikolwa Ebirikoledwa (Completed Activities)</Text>
//         <Text style={styles.activityItem}>✅ Learned Luganda Numbers</Text>
//         <Text style={styles.activityItem}>✅ Completed Traditional Songs Quiz</Text>
//       </View>

//       {/* Areas for Improvement */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Ensonga Ezetaaga Okunyikiza (Areas for Improvement)</Text>
//         <Text style={styles.issueItem}>⚠️ Needs practice in Luganda Proverbs</Text>
//         <Text style={styles.issueItem}>⚠️ Struggles with Traditional Riddles</Text>
//       </View>

//       {/* Recommended Activities */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Ebikyusiza Obuyiiya (Recommendations)</Text>
//         <TouchableOpacity style={styles.recommendButton} onPress={() => navigation.navigate('SuggestedActivities')}>
//           <Text style={styles.buttonText}>💡 Start Luganda Proverbs Challenge</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.recommendButton} onPress={() => navigation.navigate('SuggestedActivities')}>
//           <Text style={styles.buttonText}>🎵 Listen to Traditional Songs</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Switch Between Children */}
//       <TouchableOpacity style={styles.switchButton} onPress={() => alert('Switching child profiles')}>
//         <Text style={styles.buttonText}>🔄 Londa Omwana Owokubiri (Switch Child)</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F5E1A5', padding: 20 },
//   header: { alignItems: 'center', marginBottom: 10 },
//   title: { fontSize: 24, fontWeight: 'bold', color: '#6A0DAD' },
//   subtitle: { fontSize: 16, color: '#555' },
//   profileContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
//   avatar: { width: 80, height: 80, borderRadius: 40, marginRight: 10, borderWidth: 2, borderColor: '#6A0DAD' },
//   childName: { fontSize: 20, fontWeight: 'bold' },
//   childLevel: { fontSize: 16, color: '#555' },
//   section: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15 },
//   sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
//   sectionSubtext: { fontSize: 16, color: '#333' },
//   progressBar: { height: 10, backgroundColor: '#ddd', borderRadius: 5, marginTop: 5 },
//   progressFill: { height: '100%', backgroundColor: '#4CAF50', borderRadius: 5 },
//   activityItem: { fontSize: 16, marginTop: 5, color: '#007BFF' },
//   issueItem: { fontSize: 16, marginTop: 5, color: '#D32F2F' },
//   recommendButton: { padding: 10, backgroundColor: '#6A0DAD', borderRadius: 5, marginVertical: 5 },
//   switchButton: { padding: 10, backgroundColor: '#8B0000', borderRadius: 5, marginTop: 20, alignItems: 'center' },
//   buttonText: { fontSize: 16, color: '#fff', fontWeight: 'bold', textAlign: 'center' },
// });

// export default ParentDashboard;
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// const ParentDashboard = ({ navigation }) => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Greeting */}
//       <Text style={styles.header}>👑 Ssebo/Nnyabo, here is Kato’s Progress!</Text>

//       {/* XP & Level Progress */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>📊 Ebitontome (Level Progress)</Text>
//         <Text style={styles.progressText}>Obuyiiya: 1200 / 1500 XP</Text>
//         <View style={styles.progressBar}>
//           <View style={[styles.progressFill, { width: '80%' }]} />
//         </View>
//         <Text style={styles.levelText}>Current Level: Omusana (5)</Text>
//       </View>

//       {/* Recent Activities */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>🎒 Eby’obugagga (Recent Activities)</Text>
//         <Text>✅ Completed: "Math Adventure - Counting Bananas"</Text>
//         <Text>✅ Collected: "Golden Cowrie Shell"</Text>
//         <Text>✅ New Skill: "Storytelling Basics"</Text>
//       </View>

//       {/* Areas to Improve */}
//       <View style={styles.cardWarning}>
//         <Text style={styles.cardTitle}>⚡ Ensonga ez'okwongera okumanyi (Areas to Improve)</Text>
//         <Text>⚠️ Needs Help With: "Luganda Proverbs"</Text>
//         <Text>⚠️ Struggles With: "Pattern Recognition"</Text>
//       </View>

//       {/* Quick Actions */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DetailedReport')}>
//           <Text style={styles.buttonText}>📜 View Full Report</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SetGoals')}>
//           <Text style={styles.buttonText}>🎯 Set Learning Goals</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#FFD700', padding: 20 },
//   header: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, color: '#6A0DAD', textAlign: 'center' },
//   card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10 },
//   cardWarning: { backgroundColor: '#ffebcd', padding: 15, borderRadius: 10, marginBottom: 10, borderColor: 'red', borderWidth: 1 },
//   cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
//   progressText: { fontSize: 16, marginBottom: 5 },
//   progressBar: { width: '100%', height: 10, backgroundColor: '#ddd', borderRadius: 5 },
//   progressFill: { height: '100%', backgroundColor: '#4CAF50', borderRadius: 5 },
//   levelText: { fontSize: 16, marginTop: 5 },
//   buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
//   button: { backgroundColor: '#8B0000', padding: 10, borderRadius: 10 },
//   buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
// });

// export default ParentDashboard;
