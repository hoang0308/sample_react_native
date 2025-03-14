// app.tsx
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { subjects } from '@/src/constants/router';
// Định nghĩa kiểu dữ liệu cho môn học

// Màn hình trang chủ hiển thị danh sách môn học
export function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.scrollContent, { flexGrow: 1 }]}
      >
        <Text style={styles.headerTitle}>Ứng dụng Học tập</Text>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Chào mừng!</Text>
          <Text style={styles.welcomeText}>
            Hãy chọn một môn học để bắt đầu hành trình học tập của bạn.
          </Text>
        </View>
        <Text style={styles.sectionTitle}>Môn học</Text>
        <View style={styles.subjectsList}>
          {subjects.map((subject) => (
            <TouchableOpacity
              key={subject.id}
              style={[
                styles.subjectCard,
                { borderLeftColor: subject.color, width: '100%' },
              ]}
              onPress={() => navigation.navigate('SubjectScreen', { subject })}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.subjectIconContainer,
                  { backgroundColor: `${subject.color}20` },
                ]}
              >
                <Ionicons name={subject.icon} size={32} color={subject.color} />
              </View>
              <View style={styles.subjectInfo}>
                <Text style={styles.subjectName}>{subject.name}</Text>
                <Text style={styles.subjectDescription}>
                  {subject.description}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 15,
    textAlign: 'center',
  },
  welcomeSection: {
    marginBottom: 25,
  },
  welcomeTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  subjectsList: {
    marginBottom: 25,
  },
  subjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderLeftWidth: 5,
  },
  subjectIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  subjectInfo: {
    flex: 1,
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
  subjectDetail: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
