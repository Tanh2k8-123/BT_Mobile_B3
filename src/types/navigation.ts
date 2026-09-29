export type Student = {
  userName: string;
  mssv: string;
};

export type RootStackParamList = {
  Screen1: undefined;
  Screen2: Student;
};

export type StudentFormErrors = Partial<Record<keyof Student, string>>;
