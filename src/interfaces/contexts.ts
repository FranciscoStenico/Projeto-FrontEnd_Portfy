import React from "react";
import { ISwitcher } from "./pages";

export interface ISwitcherContext {
  switcher: ISwitcher;
  setSwitcher: React.Dispatch<React.SetStateAction<ISwitcher>>;
  condicionModal: boolean;
  setCondicionlModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IUser {
  username?: string;
  name: string;
  cpf?: string;
  cep?: IAdress;
  email?: string;
  password?: string;
  password_confirm?: string;
  role?: string;
  id: number;
}

export interface IAdress {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
  erro?: string;
}

export interface IAuth {
  user: IUser;
  loading: boolean;
  cepError: boolean;
  cepRequest: (e: React.FocusEvent<HTMLInputElement, Element>) => Promise<void>;
}
