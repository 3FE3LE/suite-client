import 'react-native';

declare module '*.css' {
  const content: unknown;
  export default content;
}

type NativeWindProps = {
  className?: string;
};

declare module 'react-native' {
  interface ViewProps extends NativeWindProps {}
  interface TextProps extends NativeWindProps {}
  interface PressableProps extends NativeWindProps {}
}
