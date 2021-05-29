import { Migration } from '@mikro-orm/migrations';

export class Migration20210529023700 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `server` modify `os` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');

    this.addSql('alter table `dns` drop foreign key `dns_application_id_foreign`;');
    this.addSql('alter table `dns` drop index `dns_application_id_index`;');
    this.addSql('alter table `dns` drop `application_id`;');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('create table `application_dns` (`application_id` int(11) unsigned not null, `dns_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `application_dns` add index `application_dns_application_id_index`(`application_id`);');
    this.addSql('alter table `application_dns` add index `application_dns_dns_id_index`(`dns_id`);');
    this.addSql('alter table `application_dns` add primary key `application_dns_pkey`(`application_id`, `dns_id`);');

    this.addSql('create table `dns_applications` (`dns_id` int(11) unsigned not null, `application_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `dns_applications` add index `dns_applications_dns_id_index`(`dns_id`);');
    this.addSql('alter table `dns_applications` add index `dns_applications_application_id_index`(`application_id`);');
    this.addSql('alter table `dns_applications` add primary key `dns_applications_pkey`(`dns_id`, `application_id`);');

    this.addSql('alter table `application_dns` add constraint `application_dns_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `application_dns` add constraint `application_dns_dns_id_foreign` foreign key (`dns_id`) references `dns` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `dns_applications` add constraint `dns_applications_dns_id_foreign` foreign key (`dns_id`) references `dns` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `dns_applications` add constraint `dns_applications_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete cascade;');
  }

}
