import { Migration } from '@mikro-orm/migrations';

export class Migration20210525171256 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `rfc` add column `status` varchar null;');
  }

}
