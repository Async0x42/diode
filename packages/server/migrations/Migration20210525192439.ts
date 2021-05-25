import { Migration } from '@mikro-orm/migrations';

export class Migration20210525192439 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `rfc` (`id` integer not null primary key autoincrement, `rfc_number` integer null, `title` varchar not null, `rfc_class` varchar not null, `purpose` varchar not null, `status` varchar not null, `description` varchar null, `parent_system` varchar null, `business_case` varchar null, `security_implications` varchar null, `affected_infrastructure` varchar null, `affected_configuration_items` varchar null, `affected_information_system` varchar null, `concept_of_operation` varchar null, `concept_of_testing` varchar null, `concept_of_implementation` varchar null, `backout_plan` varchar null, `impact_assessment_due_date` datetime null);');

    this.addSql('create table `contact` (`id` integer not null primary key autoincrement, `name` varchar not null, `phone` varchar null, `email` varchar null, `title` varchar null, `organization` varchar null, `department` varchar null, `notes` varchar null);');

    this.addSql('create table `calendar_item` (`id` integer not null primary key autoincrement, `title` varchar not null, `category` varchar null, `description` varchar null, `image_url` varchar null, `start` datetime not null, `end` datetime not null, `all_day` integer not null);');

    this.addSql('create table `calendar` (`id` integer not null primary key autoincrement, `name` varchar not null);');

    this.addSql('create table `brd` (`id` integer not null primary key autoincrement, `title` varchar not null, `description` varchar null, `related_requests` varchar null, `brd_number` integer null, `priority` integer null, `status` varchar null, `submission_date` datetime null, `date_entered_into_bits` datetime null, `initial_cost` integer null, `upkeep_cost` integer null);');
  }

}
