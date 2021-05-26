import { Migration } from '@mikro-orm/migrations';

export class Migration20210526205545 extends Migration {

  async up(): Promise<void> {
    this.addSql('PRAGMA table_info(`dns`);');
  }

}
