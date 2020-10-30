export interface MessageWithParam {
  name: string;
  value: string;
}

export type Message = string | MessageWithParam;
