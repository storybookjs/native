export interface MessageWithParam {
  type: string;
  value: string;
}

export type Message = string | MessageWithParam;
