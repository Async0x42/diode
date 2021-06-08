import { Migration } from '@mikro-orm/migrations';

export class Migration20210608002222 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `ssl_certificate` (`id` int unsigned not null auto_increment primary key, `sans` varchar(255) not null, `expiry` datetime null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `server_type` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `short_name` varchar(255) null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `server_location` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `short_name` varchar(255) null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `physical_server` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `base_operating_system` varchar(255) null, `hypervisor` varchar(255) null, `device_manufacturer` varchar(255) null, `device_model` varchar(255) null, `processor_manufacturer` varchar(255) null, `processor_model` varchar(255) null, `processor_frequency` varchar(255) null, `number_of_processors` int(11) null, `number_of_cores` int(11) null, `number_of_virtual_machines` varchar(255) null, `cluster_name` varchar(255) null, `location_id` int(11) unsigned null, `notes` text null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `physical_server` add index `physical_server_location_id_index`(`location_id`);');

    this.addSql('create table `operating_system` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `short_name` varchar(255) null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `server` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `ip` varchar(255) null, `operating_system_id` int(11) unsigned null, `location_id` int(11) unsigned null, `physical_server_id` int(11) unsigned null, `notes` text null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `server` add index `server_operating_system_id_index`(`operating_system_id`);');
    this.addSql('alter table `server` add index `server_location_id_index`(`location_id`);');
    this.addSql('alter table `server` add index `server_physical_server_id_index`(`physical_server_id`);');

    this.addSql('create table `server_types` (`server_id` int(11) unsigned not null, `server_type_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `server_types` add index `server_types_server_id_index`(`server_id`);');
    this.addSql('alter table `server_types` add index `server_types_server_type_id_index`(`server_type_id`);');
    this.addSql('alter table `server_types` add primary key `server_types_pkey`(`server_id`, `server_type_id`);');

    this.addSql('create table `fqdn` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `server_id` int(11) unsigned null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `fqdn` add index `fqdn_server_id_index`(`server_id`);');

    this.addSql('create table `contact_group` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `phone` varchar(255) null, `email` varchar(255) null, `title` varchar(255) null, `organization` varchar(255) null, `department` varchar(255) null, `notes` text null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `contact` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `phone` varchar(255) null, `email` varchar(255) null, `title` varchar(255) null, `organization` varchar(255) null, `department` varchar(255) null, `notes` text null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `contact_group_contacts` (`contact_group_id` int(11) unsigned not null, `contact_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `contact_group_contacts` add index `contact_group_contacts_contact_group_id_index`(`contact_group_id`);');
    this.addSql('alter table `contact_group_contacts` add index `contact_group_contacts_contact_id_index`(`contact_id`);');
    this.addSql('alter table `contact_group_contacts` add primary key `contact_group_contacts_pkey`(`contact_group_id`, `contact_id`);');

    this.addSql('create table `calendar_item` (`id` int unsigned not null auto_increment primary key, `title` varchar(255) not null, `category` varchar(255) null, `description` text null, `image_url` varchar(255) null, `start` datetime not null, `end` datetime not null, `all_day` tinyint(1) not null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `calendar` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `application` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `short_name` varchar(255) null, `description` text null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `brd` (`id` int unsigned not null auto_increment primary key, `title` varchar(255) not null, `description` text null, `related_requests` varchar(255) null, `brd_number` int(11) null, `priority` int(11) null, `status` json null, `submission_date` datetime null, `date_entered_into_bits` datetime null, `initial_cost` int(11) null, `upkeep_cost` int(11) null, `application_id` int(11) unsigned null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `brd` add index `brd_application_id_index`(`application_id`);');

    this.addSql('create table `rfc` (`id` int unsigned not null auto_increment primary key, `rfc_number` int(11) null, `title` varchar(255) not null, `application_id` int(11) unsigned null, `rfc_class` json not null, `purpose` json not null, `status` json not null, `description` text null, `parent_system` text null, `business_case` text null, `security_implications` varchar(255) null, `affected_infrastructure` text null, `affected_configuration_items` text null, `affected_information_system` text null, `concept_of_operation` text null, `concept_of_testing` text null, `concept_of_implementation` text null, `backout_plan` text null, `impact_assessment_due_date` datetime null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `rfc` add index `rfc_application_id_index`(`application_id`);');

    this.addSql('create table `application_fqdns` (`application_id` int(11) unsigned not null, `fqdn_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `application_fqdns` add index `application_fqdns_application_id_index`(`application_id`);');
    this.addSql('alter table `application_fqdns` add index `application_fqdns_fqdn_id_index`(`fqdn_id`);');
    this.addSql('alter table `application_fqdns` add primary key `application_fqdns_pkey`(`application_id`, `fqdn_id`);');

    this.addSql('create table `application_servers` (`application_id` int(11) unsigned not null, `server_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `application_servers` add index `application_servers_application_id_index`(`application_id`);');
    this.addSql('alter table `application_servers` add index `application_servers_server_id_index`(`server_id`);');
    this.addSql('alter table `application_servers` add primary key `application_servers_pkey`(`application_id`, `server_id`);');

    this.addSql('alter table `physical_server` add constraint `physical_server_location_id_foreign` foreign key (`location_id`) references `server_location` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `server` add constraint `server_operating_system_id_foreign` foreign key (`operating_system_id`) references `operating_system` (`id`) on update cascade on delete set null;');
    this.addSql('alter table `server` add constraint `server_location_id_foreign` foreign key (`location_id`) references `server_location` (`id`) on update cascade on delete set null;');
    this.addSql('alter table `server` add constraint `server_physical_server_id_foreign` foreign key (`physical_server_id`) references `physical_server` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `server_types` add constraint `server_types_server_id_foreign` foreign key (`server_id`) references `server` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `server_types` add constraint `server_types_server_type_id_foreign` foreign key (`server_type_id`) references `server_type` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `fqdn` add constraint `fqdn_server_id_foreign` foreign key (`server_id`) references `server` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `contact_group_contacts` add constraint `contact_group_contacts_contact_group_id_foreign` foreign key (`contact_group_id`) references `contact_group` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `contact_group_contacts` add constraint `contact_group_contacts_contact_id_foreign` foreign key (`contact_id`) references `contact` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `brd` add constraint `brd_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `rfc` add constraint `rfc_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `application_fqdns` add constraint `application_fqdns_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `application_fqdns` add constraint `application_fqdns_fqdn_id_foreign` foreign key (`fqdn_id`) references `fqdn` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `application_servers` add constraint `application_servers_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `application_servers` add constraint `application_servers_server_id_foreign` foreign key (`server_id`) references `server` (`id`) on update cascade on delete cascade;');
  }

}
