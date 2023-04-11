export interface IDataState {
  data: IData[];
  isLoading: boolean;
  error: string | null;
}

export interface IData {
  type: string;
  name: string;
  material?: string;
  unit: string;
  width?: number;
  price: number;
}

export interface IMaterialState {
  list: IData | null;
  pipe: IData | null;
  fix: IData | null;
}

export interface IConfig {
  type: string;
  key: string;
  name: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
}

export interface IConfigState {
  config: IConfig[];
  isLoading: boolean;
  error: string | null;
}

export interface IState {
  lengthConfig?: IConfig;
  widthConfig?: IConfig;
  frameConfig?: IConfig[];
}
export interface CalculationResult {
  square: number;
  list: number;
  pipe: number;
  fix: number;
  cell: string;
  listCost: number;
  pipeCost: number;
  fixCost: number;
}
