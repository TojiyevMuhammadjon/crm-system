import { Inject, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(@Inject('PG_CONNECTION') private readonly pg: any) {}
  async create({ name }: CreateTodoDto) {
    const {
      rows: [data],
    } = await this.pg.query('insert into todos (name) values ($1) returning*', [
      name,
    ]);

    return { message: 'OK', data };
  }

  async findAll() {
    const { rows } = await this.pg.query('SELECT * FROM todos');
    return { rows };
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
