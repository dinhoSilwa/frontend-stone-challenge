export interface ICurrency {
  dolar?: number | string | null;
  BRL?: number | string | null;
  stateRate: number | null;
  brlIOFmoney: number;
  brlIOFcard: number;
  totalBRL?: string | null;
  PayMethod: string | null;
  totalRate: number | null;

}


export interface IstateRate {
  state : string;
  purchaseRate : number;
}

export interface IFormCurrency {
  dolar: string;
  PayMethod: 'money' | 'card';
  stateRate: string;
}
