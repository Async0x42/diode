import { Migration } from '@mikro-orm/migrations';

export class Migration20210525060240 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `rfc` rename column `number` to `rfc_number`;');


    this.addSql('alter table `rfc` rename column `class` to `rfc_class`;');
  }

}
