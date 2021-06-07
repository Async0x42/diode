import { Migration } from '@mikro-orm/migrations';

export class Migration20210607201351 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `application` modify `created_on` datetime;');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json not null, modify `purpose` json not null, modify `status` json not null;');
  }

}
