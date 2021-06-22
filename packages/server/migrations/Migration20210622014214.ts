import { Migration } from '@mikro-orm/migrations';

export class Migration20210622014214 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `work_order` (`id` int unsigned not null auto_increment primary key, `created_on` datetime not null, `modified_on` datetime not null, `name` varchar(255) not null, `details` text null, `start_date` datetime null, `end_date` datetime null, `status` json null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `work_order_servers` (`work_order_id` int(11) unsigned not null, `server_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `work_order_servers` add index `work_order_servers_work_order_id_index`(`work_order_id`);');
    this.addSql('alter table `work_order_servers` add index `work_order_servers_server_id_index`(`server_id`);');
    this.addSql('alter table `work_order_servers` add primary key `work_order_servers_pkey`(`work_order_id`, `server_id`);');

    this.addSql('create table `work_order_owners` (`work_order_id` int(11) unsigned not null, `contact_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `work_order_owners` add index `work_order_owners_work_order_id_index`(`work_order_id`);');
    this.addSql('alter table `work_order_owners` add index `work_order_owners_contact_id_index`(`contact_id`);');
    this.addSql('alter table `work_order_owners` add primary key `work_order_owners_pkey`(`work_order_id`, `contact_id`);');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json not null, modify `purpose` json not null, modify `status` json not null;');

    this.addSql('create table `work_order_applications` (`work_order_id` int(11) unsigned not null, `application_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `work_order_applications` add index `work_order_applications_work_order_id_index`(`work_order_id`);');
    this.addSql('alter table `work_order_applications` add index `work_order_applications_application_id_index`(`application_id`);');
    this.addSql('alter table `work_order_applications` add primary key `work_order_applications_pkey`(`work_order_id`, `application_id`);');

    this.addSql('alter table `work_order_servers` add constraint `work_order_servers_work_order_id_foreign` foreign key (`work_order_id`) references `work_order` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `work_order_servers` add constraint `work_order_servers_server_id_foreign` foreign key (`server_id`) references `server` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `work_order_owners` add constraint `work_order_owners_work_order_id_foreign` foreign key (`work_order_id`) references `work_order` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `work_order_owners` add constraint `work_order_owners_contact_id_foreign` foreign key (`contact_id`) references `contact` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `work_order_applications` add constraint `work_order_applications_work_order_id_foreign` foreign key (`work_order_id`) references `work_order` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `work_order_applications` add constraint `work_order_applications_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete cascade;');

    this.addSql('drop table if exists `ticket`;');

    this.addSql('drop table if exists `ticket_applications`;');

    this.addSql('drop table if exists `ticket_owners`;');

    this.addSql('drop table if exists `ticket_servers`;');
  }

}
