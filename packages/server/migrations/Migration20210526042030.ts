import { Migration } from '@mikro-orm/migrations';

export class Migration20210526042030 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `server` (`id` integer not null primary key autoincrement, `name` varchar not null, `ip` varchar null);');

    this.addSql('alter table `dns` add column `server_id` integer null;');
    this.addSql('create index `dns_server_id_index` on `dns` (`server_id`);');
    this.addSql('create unique index `dns_server_id_unique` on `dns` (`server_id`);');
    this.addSql('PRAGMA table_info(`dns`);');

    this.addSql('alter table `application` add column `dns_id` integer null;');
    this.addSql('alter table `application` add column `server_id` integer null;');
    this.addSql('create index `application_dns_id_index` on `application` (`dns_id`);');
    this.addSql('create unique index `application_dns_id_unique` on `application` (`dns_id`);');
    this.addSql('create index `application_server_id_index` on `application` (`server_id`);');
  }

}
