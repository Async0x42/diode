import { Migration } from '@mikro-orm/migrations';

export class Migration20210720203323 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `work_order` modify `status` json;');

    this.addSql('alter table `ticket` modify `status` json;');

    this.addSql('create table `server_support_groups` (`server_id` int(11) unsigned not null, `contact_group_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `server_support_groups` add index `server_support_groups_server_id_index`(`server_id`);');
    this.addSql('alter table `server_support_groups` add index `server_support_groups_contact_group_id_index`(`contact_group_id`);');
    this.addSql('alter table `server_support_groups` add primary key `server_support_groups_pkey`(`server_id`, `contact_group_id`);');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');

    this.addSql('alter table `server_support_groups` add constraint `server_support_groups_server_id_foreign` foreign key (`server_id`) references `server` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `server_support_groups` add constraint `server_support_groups_contact_group_id_foreign` foreign key (`contact_group_id`) references `contact_group` (`id`) on update cascade on delete cascade;');
  }

}
