import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ISubject } from '../constants/router';

export type IRootStackParamList = {
  HomeScreen: undefined;
  SubjectScreen: ISubject;
  LessonScreen: ISubject;
};

export type IBaseStackScreenProps<T extends keyof IRootStackParamList> =
  NativeStackScreenProps<IRootStackParamList, T>;
