import { Migration } from '@mikro-orm/migrations';

export class Migration20210602000451 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `server_type` add `short_name` varchar(255) null;');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');
  }

}
