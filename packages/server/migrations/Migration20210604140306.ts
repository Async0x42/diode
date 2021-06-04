import { Migration } from '@mikro-orm/migrations';

export class Migration20210604140306 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `physical_server` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `hypervisor` varchar(255) null, `device_manufacturer` varchar(255) null, `device_model` varchar(255) null, `processor_manufacturer` varchar(255) null, `processor_model` varchar(255) null, `processor_frequency` varchar(255) null, `number_of_processors` int(11) null, `number_of_cores` int(11) null, `number_of_virtual_machines` varchar(255) null, `cluster_name` varchar(255) null, `location_id` int(11) unsigned null, `notes` text null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `physical_server` add index `physical_server_location_id_index`(`location_id`);');

    this.addSql('alter table `server` add `physical_server_id` int(11) unsigned null;');
    this.addSql('alter table `server` add index `server_physical_server_id_index`(`physical_server_id`);');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');

    this.addSql('alter table `physical_server` add constraint `physical_server_location_id_foreign` foreign key (`location_id`) references `server_location` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `server` add constraint `server_physical_server_id_foreign` foreign key (`physical_server_id`) references `physical_server` (`id`) on update cascade on delete set null;');
  }

}
