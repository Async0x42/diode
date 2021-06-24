import { Migration } from '@mikro-orm/migrations';

export class Migration20210624010517 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `work_order` modify `status` json;');

    this.addSql('alter table `ticket` modify `status` json;');

    this.addSql('alter table `operating_system` add `end_of_support_date` datetime null;');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json not null, modify `purpose` json not null, modify `status` json not null;');
  }

}
