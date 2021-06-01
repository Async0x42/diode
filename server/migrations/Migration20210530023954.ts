import { Migration } from '@mikro-orm/migrations';

export class Migration20210530023954 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `server` add `type` json null, add `location` json null;');
    this.addSql('alter table `server` modify `os` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('drop table if exists `application_fqdn`;');

    this.addSql('drop table if exists `fqdn_applications`;');
  }

}
