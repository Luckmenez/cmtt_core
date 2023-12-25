import { Prisma } from '@prisma/client';

export class User implements Prisma.usersUncheckedCreateInput {
  id: string;
  name: string;
  cpf: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  candidateId: string;
  electors: Prisma.electorsUncheckedCreateNestedOneWithoutUsersInput;
  session: Prisma.sessionUncheckedCreateNestedManyWithoutUsersInput;
  candidate: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
