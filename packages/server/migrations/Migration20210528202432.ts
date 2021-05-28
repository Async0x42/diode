import { Migration } from '@mikro-orm/migrations';

export class Migration20210528202432 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `server` add `notes` text null;');
    this.addSql('alter table `server` modify `os` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');

    this.addSql('alter table `brd` modify `status` json;');
  }

}
