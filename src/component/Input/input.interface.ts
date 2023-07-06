import {StyleProp, TextInputProps, TextStyle} from 'react-native';

export interface InputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  inputProps?: TextInputProps;
  showClose?: boolean;
  onClose?: () => void;
  inputStyle?: StyleProp<TextStyle>;
}
