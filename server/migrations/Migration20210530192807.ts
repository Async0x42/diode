import { Migration } from '@mikro-orm/migrations';

export class Migration20210530192807 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `rfc` modify `rfc_class` json not null, modify `purpose` json not null, modify `status` json not null;');

    this.addSql('alter table `server` change `os_id` `operating_system_id` int(11) unsigned null;');


    this.addSql('alter table `brd` modify `status` json;');
  }

}
