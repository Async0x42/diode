import { Migration } from '@mikro-orm/migrations';

export class Migration20210601014827 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` add `application_id` int(11) unsigned null;');
    this.addSql('alter table `rfc` modify `rfc_class` json not null, modify `purpose` json not null, modify `status` json not null;');
    this.addSql('alter table `rfc` add index `rfc_application_id_index`(`application_id`);');

    this.addSql('alter table `rfc` add constraint `rfc_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete set null;');
  }

}
