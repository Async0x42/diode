import { Migration } from '@mikro-orm/migrations';

export class Migration20210604155258 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `physical_server` add `base_operating_system` varchar(255) null;');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');
  }

}
