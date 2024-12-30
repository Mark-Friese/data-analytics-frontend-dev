export interface SubMethod {
  title: string;
  description: string;
}

export interface Method {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  subMethods: SubMethod[];
}