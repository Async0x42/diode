import { Migration } from '@mikro-orm/migrations';

export class Migration20210618192955 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `ticket` modify `status` json;');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');
  }

}
