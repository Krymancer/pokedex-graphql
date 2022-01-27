import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
  }

  export interface CustomTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;
      background: string;
      text: string;
      sidebar: string;
      toggle: string;
    };
  }
}
