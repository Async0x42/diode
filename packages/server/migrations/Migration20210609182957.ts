import { Migration } from '@mikro-orm/migrations';

export class Migration20210609182957 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `ticket` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `details` text null, `start_date` datetime null, `end_date` datetime null, `status` json null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `ticket_servers` (`ticket_id` int(11) unsigned not null, `server_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `ticket_servers` add index `ticket_servers_ticket_id_index`(`ticket_id`);');
    this.addSql('alter table `ticket_servers` add index `ticket_servers_server_id_index`(`server_id`);');
    this.addSql('alter table `ticket_servers` add primary key `ticket_servers_pkey`(`ticket_id`, `server_id`);');

    this.addSql('create table `ticket_owners` (`ticket_id` int(11) unsigned not null, `contact_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `ticket_owners` add index `ticket_owners_ticket_id_index`(`ticket_id`);');
    this.addSql('alter table `ticket_owners` add index `ticket_owners_contact_id_index`(`contact_id`);');
    this.addSql('alter table `ticket_owners` add primary key `ticket_owners_pkey`(`ticket_id`, `contact_id`);');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json not null, modify `purpose` json not null, modify `status` json not null;');

    this.addSql('create table `ticket_applications` (`ticket_id` int(11) unsigned not null, `application_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `ticket_applications` add index `ticket_applications_ticket_id_index`(`ticket_id`);');
    this.addSql('alter table `ticket_applications` add index `ticket_applications_application_id_index`(`application_id`);');
    this.addSql('alter table `ticket_applications` add primary key `ticket_applications_pkey`(`ticket_id`, `application_id`);');

    this.addSql('alter table `ticket_servers` add constraint `ticket_servers_ticket_id_foreign` foreign key (`ticket_id`) references `ticket` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `ticket_servers` add constraint `ticket_servers_server_id_foreign` foreign key (`server_id`) references `server` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `ticket_owners` add constraint `ticket_owners_ticket_id_foreign` foreign key (`ticket_id`) references `ticket` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `ticket_owners` add constraint `ticket_owners_contact_id_foreign` foreign key (`contact_id`) references `contact` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `ticket_applications` add constraint `ticket_applications_ticket_id_foreign` foreign key (`ticket_id`) references `ticket` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `ticket_applications` add constraint `ticket_applications_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete cascade;');
  }

}
