import { Migration } from '@mikro-orm/migrations';

export class Migration20210608020833 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table `server_ssl_certificates` (`server_id` int(11) unsigned not null, `ssl_certificate_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;'
    );
    this.addSql('alter table `server_ssl_certificates` add index `server_ssl_certificates_server_id_index`(`server_id`);');
    this.addSql('alter table `server_ssl_certificates` add index `server_ssl_certificates_ssl_certificate_id_index`(`ssl_certificate_id`);');
    this.addSql('alter table `server_ssl_certificates` add primary key `server_ssl_certificates_pkey`(`server_id`, `ssl_certificate_id`);');

    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');

    this.addSql(
      'alter table `server_ssl_certificates` add constraint `server_ssl_certificates_server_id_foreign` foreign key (`server_id`) references `server` (`id`) on update cascade on delete cascade;'
    );
    this.addSql(
      'alter table `server_ssl_certificates` add constraint `server_ssl_certificates_ssl_certificate_id_foreign` foreign key (`ssl_certificate_id`) references `ssl_certificate` (`id`) on update cascade on delete cascade;'
    );
  }
}
