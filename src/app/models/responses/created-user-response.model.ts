import { User } from '../user.model';

export interface CreatedUserResponse {
  ok: string;
  user: User;
  token: string;
}
