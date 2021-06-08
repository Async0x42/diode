import { Migration } from '@mikro-orm/migrations';

export class Migration20210608213645 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `network` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `short_name` varchar(255) null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `environment` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `short_name` varchar(255) null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('alter table `server` add `environment_id` int(11) unsigned null, add `network_id` int(11) unsigned null;');
    this.addSql('alter table `server` add index `server_environment_id_index`(`environment_id`);');
    this.addSql('alter table `server` add index `server_network_id_index`(`network_id`);');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');

    this.addSql('alter table `server` add constraint `server_environment_id_foreign` foreign key (`environment_id`) references `environment` (`id`) on update cascade on delete set null;');
    this.addSql('alter table `server` add constraint `server_network_id_foreign` foreign key (`network_id`) references `network` (`id`) on update cascade on delete set null;');
  }

}
