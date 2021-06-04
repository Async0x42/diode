import { Migration } from '@mikro-orm/migrations';

export class Migration20210604184826 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `contact_group` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `phone` varchar(255) null, `email` varchar(255) null, `organization` varchar(255) null, `department` varchar(255) null, `notes` text null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `contact_group_contacts` (`contact_group_id` int(11) unsigned not null, `contact_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `contact_group_contacts` add index `contact_group_contacts_contact_group_id_index`(`contact_group_id`);');
    this.addSql('alter table `contact_group_contacts` add index `contact_group_contacts_contact_id_index`(`contact_id`);');
    this.addSql('alter table `contact_group_contacts` add primary key `contact_group_contacts_pkey`(`contact_group_id`, `contact_id`);');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');

    this.addSql('alter table `contact_group_contacts` add constraint `contact_group_contacts_contact_group_id_foreign` foreign key (`contact_group_id`) references `contact_group` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `contact_group_contacts` add constraint `contact_group_contacts_contact_id_foreign` foreign key (`contact_id`) references `contact` (`id`) on update cascade on delete cascade;');
  }

}
