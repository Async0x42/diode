import { Migration } from '@mikro-orm/migrations';

export class Migration20210607194525 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `server_type` add `created_on` datetime not null, add `modified_on` datetime not null;');

    this.addSql('alter table `server_location` add `created_on` datetime not null, add `modified_on` datetime not null;');

    this.addSql('alter table `physical_server` add `created_on` datetime not null, add `modified_on` datetime not null;');

    this.addSql('alter table `operating_system` add `created_on` datetime not null, add `modified_on` datetime not null;');

    this.addSql('alter table `server` add `created_on` datetime not null, add `modified_on` datetime not null;');

    this.addSql('alter table `fqdn` add `created_on` datetime not null, add `modified_on` datetime not null;');

    this.addSql('alter table `contact_group` add `created_on` datetime not null, add `modified_on` datetime not null;');

    this.addSql('alter table `contact` add `created_on` datetime not null, add `modified_on` datetime not null;');

    this.addSql('alter table `calendar_item` add `created_on` datetime not null, add `modified_on` datetime not null;');

    this.addSql('alter table `calendar` add `created_on` datetime not null, add `modified_on` datetime not null;');

    this.addSql('alter table `application` add `created_on` datetime not null, add `modified_on` datetime not null;');

    this.addSql('alter table `brd` add `created_on` datetime not null, add `modified_on` datetime not null;');
    this.addSql('alter table `brd` modify `status` json;');

    this.addSql('alter table `rfc` add `created_on` datetime not null, add `modified_on` datetime not null;');
    this.addSql('alter table `rfc` modify `rfc_class` json, modify `purpose` json, modify `status` json;');
  }

}
