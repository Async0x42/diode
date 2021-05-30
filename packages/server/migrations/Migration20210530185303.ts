import { Migration } from '@mikro-orm/migrations';

export class Migration20210530185303 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `server_type` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `server_location` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');

    this.addSql('create table `operating_system` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('alter table `server` add `os_id` int(11) unsigned null, add `location_id` int(11) unsigned null;');
    this.addSql('alter table `server` add index `server_os_id_index`(`os_id`);');
    this.addSql('alter table `server` add index `server_location_id_index`(`location_id`);');
    this.addSql('alter table `server` drop `os`;');
    this.addSql('alter table `server` drop `location`;');
    this.addSql('alter table `server` drop `types`;');

    this.addSql('create table `server_types` (`server_id` int(11) unsigned not null, `server_type_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `server_types` add index `server_types_server_id_index`(`server_id`);');
    this.addSql('alter table `server_types` add index `server_types_server_type_id_index`(`server_type_id`);');
    this.addSql('alter table `server_types` add primary key `server_types_pkey`(`server_id`, `server_type_id`);');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `server` add constraint `server_os_id_foreign` foreign key (`os_id`) references `operating_system` (`id`) on update cascade on delete set null;');
    this.addSql('alter table `server` add constraint `server_location_id_foreign` foreign key (`location_id`) references `server_location` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `server_types` add constraint `server_types_server_id_foreign` foreign key (`server_id`) references `server` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `server_types` add constraint `server_types_server_type_id_foreign` foreign key (`server_type_id`) references `server_type` (`id`) on update cascade on delete cascade;');
  }

}
