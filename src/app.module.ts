import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [SharedModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
