import { Migration } from '@mikro-orm/migrations';

export class Migration20210530195529 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');

    this.addSql('alter table `brd` add `application_id` int(11) unsigned null;');
    this.addSql('alter table `brd` modify `status` json;');
    this.addSql('alter table `brd` add index `brd_application_id_index`(`application_id`);');

    this.addSql('alter table `brd` add constraint `brd_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `server` drop index `server_os_id_index`;');
  }

}
