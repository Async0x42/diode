import { Migration } from '@mikro-orm/migrations';

export class Migration20210526004642 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `application` (`id` integer not null primary key autoincrement, `name` varchar not null, `short_name` varchar null, `description` varchar null);');
  }

}
