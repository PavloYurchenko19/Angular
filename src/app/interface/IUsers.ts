import { ICompany } from "./ICompany";

export interface IUsers {
  id: number;
  name: string;
  userName: string;
  email: string;
  company: ICompany;
}
