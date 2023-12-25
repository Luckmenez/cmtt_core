import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../../prisma/prisma.service';
import { fakeUser, prismaUserRepositoryMock } from './mock/user.mock';
import { IsUnique } from 'src/decorators/isUnique.decorator';

describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: prismaUserRepositoryMock,
        },
      ],
    })
      .overridePipe(IsUnique)
      .useValue({
        validator: jest.fn(() => true),
      })
      .compile();

    service = module.get<UserService>(UserService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create User', () => {
    it('should be able to create an user', async () => {
      const response = await service.create(fakeUser[0]);
      expect(response).toMatchObject({
        message: 'Usuário criado com sucesso.',
      });
      expect(prisma.users.create).toHaveBeenCalledTimes(1);
    });
  });
});
