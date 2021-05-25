import { Migration } from '@mikro-orm/migrations';

export class Migration20210525214418 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `dns` (`id` integer not null primary key autoincrement, `name` varchar not null, `ip` varchar null);');
  }

}
