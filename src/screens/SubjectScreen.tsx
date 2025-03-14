import { Ionicons } from '@expo/vector-icons';
import { PageLayout } from '../components/common/PageLayout';
import { StyleSheet, Text, View } from 'react-native';

export function SubjectScreen({ route }: any) {
  const { subject } = route.params;
  return (
    <PageLayout showFooter={true}>
      <View style={styles.subjectDetail}>
        <Ionicons name={subject.icon} size={48} color={subject.color} />
        <Text style={styles.subjectName}>{subject.name}</Text>
        <Text style={styles.subjectDescription}>{subject.description}</Text>
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  subjectDetail: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  subjectName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  subjectDescription: {
    fontSize: 14,
    color: '#666',
  },
});
