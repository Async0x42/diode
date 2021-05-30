import { Migration } from '@mikro-orm/migrations';

export class Migration20210530024258 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `server` add `types` json null;');
    this.addSql('alter table `server` modify `os` json, modify `location` json;');
    this.addSql('alter table `server` drop `type`;');

    this.addSql('alter table `rfc` modify `rfc_class` json not null, modify `purpose` json not null, modify `status` json not null;');

    this.addSql('alter table `brd` modify `status` json;');
  }

}
