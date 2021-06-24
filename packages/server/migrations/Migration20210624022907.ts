import { Migration } from '@mikro-orm/migrations';

export class Migration20210624022907 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `work_order` modify `status` json;');

    this.addSql('alter table `ticket` modify `status` json;');

    this.addSql('alter table `dependency` add `package_name` varchar(255) null;');
    this.addSql('alter table `dependency` modify `version` varchar(255) null;');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');
  }

}
