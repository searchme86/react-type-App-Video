import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // styled components에서 사용하려는
    // 스타일 인터페이스를 정의하는 곳
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
