import { Migration } from '@mikro-orm/migrations';

export class Migration20210608022010 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` modify `rfc_class` json not null, modify `purpose` json not null, modify `status` json not null;');

    this.addSql(
      'create table `application_ssl_certificates` (`application_id` int(11) unsigned not null, `ssl_certificate_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;'
    );
    this.addSql('alter table `application_ssl_certificates` add index `application_ssl_certificates_application_id_index`(`application_id`);');
    this.addSql(
      'alter table `application_ssl_certificates` add index `application_ssl_certificates_ssl_certificate_id_index`(`ssl_certificate_id`);'
    );
    this.addSql(
      'alter table `application_ssl_certificates` add primary key `application_ssl_certificates_pkey`(`application_id`, `ssl_certificate_id`);'
    );

    this.addSql(
      'alter table `application_ssl_certificates` add constraint `application_ssl_certificates_application_id_foreign` foreign key (`application_id`) references `application` (`id`) on update cascade on delete cascade;'
    );
    this.addSql(
      'alter table `application_ssl_certificates` add constraint `application_ssl_certificates_ssl_certificate_id_foreign` foreign key (`ssl_certificate_id`) references `ssl_certificate` (`id`) on update cascade on delete cascade;'
    );
  }
}
