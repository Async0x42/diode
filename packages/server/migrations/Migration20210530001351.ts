import { Migration } from '@mikro-orm/migrations';

export class Migration20210530001351 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `server` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `ip` varchar(255) null, `os` json null, `notes` text null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `rfc` (`id` int unsigned not null auto_increment primary key, `rfc_number` int(11) null, `title` varchar(255) not null, `rfc_class` json not null, `purpose` json not null, `status` json not null, `description` text null, `parent_system` text null, `business_case` text null, `security_implications` varchar(255) null, `affected_infrastructure` text null, `affected_configuration_items` text null, `affected_information_system` text null, `concept_of_operation` text null, `concept_of_testing` text null, `concept_of_implementation` text null, `backout_plan` text null, `impact_assessment_due_date` datetime null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `fqdn` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `server_id` int(11) unsigned null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `fqdn` add index `fqdn_server_id_index`(`server_id`);');

    this.addSql('create table `contact` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `phone` varchar(255) null, `email` varchar(255) null, `title` varchar(255) null, `organization` varchar(255) null, `department` varchar(255) null, `notes` text null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `calendar_item` (`id` int unsigned not null auto_increment primary key, `title` varchar(255) not null, `category` varchar(255) null, `description` text null, `image_url` varchar(255) null, `start` datetime not null, `end` datetime not null, `all_day` tinyint(1) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `calendar` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `brd` (`id` int unsigned not null auto_increment primary key, `title` varchar(255) not null, `description` text null, `related_requests` varchar(255) null, `brd_number` int(11) null, `priority` int(11) null, `status` json null, `submission_date` datetime null, `date_entered_into_bits` datetime null, `initial_cost` int(11) null, `upkeep_cost` int(11) null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `application` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `short_name` varchar(255) null, `description` text null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `application_fqdns` (`application_id` int(11) unsigned not null, `fqdn_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `application_fqdns` add index `application_fqdns_application_id_index`(`application_id`);');
    this.addSql('alter table `application_fqdns` add index `application_fqdns_fqdn_id_index`(`fqdn_id`);');
    this.addSql('alter table `application_fqdns` add primary key `application_fqdns_pkey`(`application_id`, `fqdn_id`);');

    this.addSql('create table `application_servers` (`application_id` int(11) unsigned not null, `server_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `application_servers` add index `application_servers_application_id_index`(`application_id`);');
    this.addSql('alter table `application_servers` add index `application_servers_server_id_index`(`server_id`);');
    this.addSql('alter table `application_servers` add primary key `application_servers_pkey`(`application_id`, `server_id`);');

    this.addSql('alter table `fqdn` add constraint `fqdn_server_id_foreign` foreign key (`server_id`) references `server` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `application_fqdns` add constraint `application_fqdns_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `application_fqdns` add constraint `application_fqdns_fqdn_id_foreign` foreign key (`fqdn_id`) references `fqdn` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `application_servers` add constraint `application_servers_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `application_servers` add constraint `application_servers_server_id_foreign` foreign key (`server_id`) references `server` (`id`) on update cascade on delete cascade;');
  }

}
