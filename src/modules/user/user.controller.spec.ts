import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { createUserDtoMock, prismaUserServiceMock } from './mock/user.mock';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [prismaUserServiceMock],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('User Create', () => {
    it('Should be able to create a new user', async () => {
      const result = await controller.create(createUserDtoMock);
      expect(result).toMatchObject({ message: 'Usuário criado com sucesso' });
    });
  });
});
