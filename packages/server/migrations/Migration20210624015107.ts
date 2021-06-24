import { Migration } from '@mikro-orm/migrations';

export class Migration20210624015107 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `work_order` modify `status` json;');

    this.addSql('alter table `ticket` modify `status` json;');

    this.addSql('create table `dependency` (`id` int unsigned not null auto_increment primary key, `created_on` datetime not null, `modified_on` datetime not null, `name` varchar(255) not null, `end_of_support_date` datetime null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `server_dependencies` (`server_id` int(11) unsigned not null, `dependency_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `server_dependencies` add index `server_dependencies_server_id_index`(`server_id`);');
    this.addSql('alter table `server_dependencies` add index `server_dependencies_dependency_id_index`(`dependency_id`);');
    this.addSql('alter table `server_dependencies` add primary key `server_dependencies_pkey`(`server_id`, `dependency_id`);');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');

    this.addSql('create table `application_dependencies` (`application_id` int(11) unsigned not null, `dependency_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `application_dependencies` add index `application_dependencies_application_id_index`(`application_id`);');
    this.addSql('alter table `application_dependencies` add index `application_dependencies_dependency_id_index`(`dependency_id`);');
    this.addSql('alter table `application_dependencies` add primary key `application_dependencies_pkey`(`application_id`, `dependency_id`);');

    this.addSql('alter table `server_dependencies` add constraint `server_dependencies_server_id_foreign` foreign key (`server_id`) references `server` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `server_dependencies` add constraint `server_dependencies_dependency_id_foreign` foreign key (`dependency_id`) references `dependency` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `application_dependencies` add constraint `application_dependencies_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `application_dependencies` add constraint `application_dependencies_dependency_id_foreign` foreign key (`dependency_id`) references `dependency` (`id`) on update cascade on delete cascade;');
  }

}
