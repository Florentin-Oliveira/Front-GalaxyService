export interface IUser {
  id?: number;
  username: string;
  email?: string;
  password?: string;
  token: string;
  expirationTime: number; 
}
