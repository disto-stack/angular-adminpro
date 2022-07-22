import { User } from '../user.model';

export interface UserCreatedResponse {
  ok: string;
  user: User;
  token: string;
}
