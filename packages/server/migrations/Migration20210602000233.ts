import { Migration } from '@mikro-orm/migrations';

export class Migration20210602000233 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `server_location` add `short_name` varchar(255) null;');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json not null, modify `purpose` json not null, modify `status` json not null;');

    this.addSql('alter table `server` drop index `server_os_id_foreign`;');
  }

}
