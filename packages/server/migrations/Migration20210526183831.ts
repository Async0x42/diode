import { Migration } from '@mikro-orm/migrations';

export class Migration20210526183831 extends Migration {

  async up(): Promise<void> {
    this.addSql('PRAGMA table_info(`dns`);');

    this.addSql('drop index `dns_server_id_unique`;');
  }

}
