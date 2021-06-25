import { Migration } from '@mikro-orm/migrations';

export class Migration20210625233657 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `work_order` modify `status` json;');

    this.addSql('alter table `ticket` modify `status` json;');

    this.addSql('alter table `server` add `storage_space` int(11) null, add `system_memory` int(11) null;');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json not null, modify `purpose` json not null, modify `status` json not null;');
  }

}
