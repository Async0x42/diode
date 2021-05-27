import { Migration } from '@mikro-orm/migrations';

export class Migration20210527010325 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `server` add column `os` varchar null;');

    this.addSql('PRAGMA table_info(`dns`);');
  }

}
