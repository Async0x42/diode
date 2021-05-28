import { Migration } from '@mikro-orm/migrations';

export class Migration20210528030200 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `server` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `ip` varchar(255) null, `os` json null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `rfc` (`id` int unsigned not null auto_increment primary key, `rfc_number` int(11) null, `title` varchar(255) not null, `rfc_class` json not null, `purpose` json not null, `status` json not null, `description` varchar(255) null, `parent_system` varchar(255) null, `business_case` varchar(255) null, `security_implications` varchar(255) null, `affected_infrastructure` varchar(255) null, `affected_configuration_items` varchar(255) null, `affected_information_system` varchar(255) null, `concept_of_operation` varchar(255) null, `concept_of_testing` varchar(255) null, `concept_of_implementation` varchar(255) null, `backout_plan` varchar(255) null, `impact_assessment_due_date` datetime null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `contact` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `phone` varchar(255) null, `email` varchar(255) null, `title` varchar(255) null, `organization` varchar(255) null, `department` varchar(255) null, `notes` varchar(255) null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `calendar_item` (`id` int unsigned not null auto_increment primary key, `title` varchar(255) not null, `category` varchar(255) null, `description` varchar(255) null, `image_url` varchar(255) null, `start` datetime not null, `end` datetime not null, `all_day` tinyint(1) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `calendar` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `brd` (`id` int unsigned not null auto_increment primary key, `title` varchar(255) not null, `description` varchar(255) null, `related_requests` varchar(255) null, `brd_number` int(11) null, `priority` int(11) null, `status` json null, `submission_date` datetime null, `date_entered_into_bits` datetime null, `initial_cost` int(11) null, `upkeep_cost` int(11) null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `application` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `short_name` varchar(255) null, `description` varchar(255) null, `server_id` int(11) unsigned null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `application` add index `application_server_id_index`(`server_id`);');

    this.addSql('create table `dns` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `server_id` int(11) unsigned null, `application_id` int(11) unsigned null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `dns` add index `dns_server_id_index`(`server_id`);');
    this.addSql('alter table `dns` add index `dns_application_id_index`(`application_id`);');

    this.addSql('alter table `application` add constraint `application_server_id_foreign` foreign key (`server_id`) references `server` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `dns` add constraint `dns_server_id_foreign` foreign key (`server_id`) references `server` (`id`) on update cascade on delete set null;');
    this.addSql('alter table `dns` add constraint `dns_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete set null;');
  }

}
