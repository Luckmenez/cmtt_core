import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { IsUniqueConstraint } from './validators/IsUnique.validator';

const env = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        env === 'development'
          ? '.env.dev'
          : env === 'test'
            ? '.env.test'
            : 'env',
    }),
    PrismaModule,
    UserModule,
  ],
  providers: [IsUniqueConstraint],
})
export class AppModule {}
