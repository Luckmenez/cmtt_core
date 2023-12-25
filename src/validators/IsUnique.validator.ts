import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { IsUniqueInterface } from '../decorators/isUnique.decorator';
import { PrismaService } from '../prisma/prisma.service';

@ValidatorConstraint({ name: 'isUniqueConstraint', async: true })
@Injectable()
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly prismaService: PrismaService) {}
  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const { tableName, column }: IsUniqueInterface =
      validationArguments.constraints[0];

    const isDataFound = await this.prismaService[tableName].findFirst({
      where: {
        [column]: value,
      },
    });

    return !isDataFound;
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    const field: string = validationArguments.property;
    return `${field} já existe`;
  }
}
