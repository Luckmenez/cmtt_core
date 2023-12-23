import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

const enviornment = process.env.NODE_ENV

@Module({
  imports: [ConfigModule.forRoot(
    {
      envFilePath: enviornment === 'development' ? '.env.dev' : '.env'
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
