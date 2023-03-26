import { IEnergyData } from './energyData.interface';

export interface IUserData {
  City: string;
  EmailAddress: string;
  EnergyData: IEnergyData[];
  EnergyProvider: string;
  FirstName: string;
  LastLogin: string;
  LastName: string;
  MiddleName: string;
  PasswordHash: string;
  RegisteredDate: string;
  State: string;
  StreetAddress: string;
  UserID: number;
  UserRole: string;
  UserType: string;
  Zip: string;
}
