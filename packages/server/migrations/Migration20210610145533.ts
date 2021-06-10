import { Migration } from '@mikro-orm/migrations';

export class Migration20210610145533 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table `zone` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `short_name` varchar(255) null, `created_on` datetime not null, `modified_on` datetime not null) default character set utf8mb4 engine = InnoDB;'
    );

    this.addSql('alter table `ticket` modify `status` json;');

    this.addSql('alter table `server` add `zone_id` int(11) unsigned null;');
    this.addSql('alter table `server` add index `server_zone_id_index`(`zone_id`);');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json not null, modify `purpose` json not null, modify `status` json not null;');

    this.addSql(
      'alter table `server` add constraint `server_zone_id_foreign` foreign key (`zone_id`) references `zone` (`id`) on update cascade on delete set null;'
    );
  }
}
