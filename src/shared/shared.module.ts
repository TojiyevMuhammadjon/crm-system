import { Module } from '@nestjs/common';
import { DatabaseModule } from './providers/database.module';

@Module({
  imports: [DatabaseModule],
})
export class SharedModule {}
