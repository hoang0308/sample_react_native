import { Ionicons } from '@expo/vector-icons';

interface Subject {
  id: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  description: string;
}

// Danh sách các môn học
export const subjects: Subject[] = [
  {
    id: 'math',
    name: 'Toán học',
    icon: 'calculator',
    color: '#2196F3',
    description: 'Đại số, Hình học, Giải tích...',
  },
  {
    id: 'physics',
    name: 'Vật lý',
    icon: 'flash',
    color: '#FF9800',
    description: 'Cơ học, Điện từ học, Quang học...',
  },
  {
    id: 'chemistry',
    name: 'Hóa học',
    icon: 'flask',
    color: '#9C27B0',
    description: 'Hóa hữu cơ, Hóa vô cơ, Hóa phân tích...',
  },
];

export const ROUTER_APP = {
  Home: {
    name: 'Home',
  },
};
