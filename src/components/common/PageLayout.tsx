import { ROUTER_APP } from '@/src/constants/router';
import { useNavigation } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export function PageLayout({
  children,
  showFooter = false,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
}) {
  const navigation = useNavigation() as any;
  return (
    <SafeAreaView style={pageStyles.container}>
      {/* Header */}
      <View style={pageStyles.header}>
        <Text style={pageStyles.headerText}>Ứng dụng Học tập</Text>
      </View>

      {/* Nội dung */}
      <View style={pageStyles.content}>{children}</View>

      {/* Footer với nút về Trang chủ */}
      {showFooter && (
        <View style={pageStyles.footer}>
          <TouchableOpacity
            style={pageStyles.footerButton}
            onPress={() => navigation.navigate(ROUTER_APP.Home.name)}
          >
            <Text style={pageStyles.footerButtonText}>Trang chủ</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 60,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  footer: {
    height: 60,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
