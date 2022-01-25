import { Migration } from '@mikro-orm/migrations';

export class Migration20220125174250 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `server` add `management_ip` varchar(255) null;');
  }

}
