export interface Action {
  label: string;
  onPress?: (close: () => void) => void;
}

export interface Content {
  title: string;
  bgAction?: boolean;
  description: string;
  mainAction: Action;
  subAction: Action;
}
