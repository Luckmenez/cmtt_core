import { Prisma } from '@prisma/client';
import { User } from '../entities/user.entity';
import { Provider } from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserDto } from '../dto/create-user.dto';

export const fakeUser: User[] = [
  {
    id: '1',
    name: 'teste',
    cpf: '425.470.988.90',
    email: 'email@email.com.br',
    password: '123abc',
    role: 'user',
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    candidateId: null,
    electors: null,
    session: [] as Prisma.sessionUncheckedCreateNestedManyWithoutUsersInput,
    candidate: null,
  },
  {
    id: '2',
    name: 'teste2',
    cpf: '888.470.988.90',
    email: 'email2@email.com.br',
    password: '123abc',
    role: 'user',
    created_at: new Date(),
    updated_at: null,
    deleted_at: null,
    candidateId: null,
    electors: null,
    session: [] as Prisma.sessionUncheckedCreateNestedManyWithoutUsersInput,
    candidate: null,
  },
];

export const createUserDtoMock: CreateUserDto = {
  cpf: '222.222.222-22',
  email: 'mock@email.com',
  name: 'Mock Dude',
  password: 'my Password',
};

export const prismaUserRepositoryMock = {
  users: {
    create: jest.fn().mockReturnValue(fakeUser[0]),
    findMany: jest.fn().mockResolvedValue(fakeUser),
    findUnique: jest.fn().mockResolvedValue(fakeUser[0]),
    update: jest.fn().mockResolvedValue(fakeUser[0]),
    delete: jest.fn(),
  },
};

export const prismaUserServiceMock: Provider = {
  provide: UserService,
  useValue: {
    create: jest
      .fn()
      .mockReturnValue({ message: 'Usuário criado com sucesso' }),
    findMany: jest.fn().mockResolvedValue(fakeUser),
    findUnique: jest.fn().mockResolvedValue(fakeUser[0]),
    update: jest.fn().mockResolvedValue(fakeUser[0]),
    delete: jest.fn(),
  },
};
