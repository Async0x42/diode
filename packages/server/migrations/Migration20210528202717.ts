import { Migration } from '@mikro-orm/migrations';

export class Migration20210528202717 extends Migration {
  async up(): Promise<void> {
    this.addSql('ALTER TABLE `application` CHANGE COLUMN `description` `description` TEXT NULL DEFAULT NULL');
    this.addSql('ALTER TABLE `brd` CHANGE COLUMN `description` `description` TEXT NULL DEFAULT NULL');
    this.addSql('ALTER TABLE `calendar_item` CHANGE COLUMN `description` `description` TEXT NULL DEFAULT NULL');
    this.addSql('ALTER TABLE `contact` CHANGE COLUMN `notes` `notes` TEXT NULL DEFAULT NULL');
    this.addSql(
      'ALTER TABLE `rfc` CHANGE COLUMN `description` `description` TEXT NULL DEFAULT NULL AFTER `status` CHANGE COLUMN `business_case` `business_case` TEXT NULL DEFAULT NULL AFTER `parent_system` CHANGE COLUMN `security_implications` `security_implications` TEXT NULL DEFAULT NULL AFTER `business_case` CHANGE COLUMN `affected_infrastructure` `affected_infrastructure` TEXT NULL DEFAULT NULL AFTER `security_implications` CHANGE COLUMN `affected_configuration_items` `affected_configuration_items` TEXT NULL DEFAULT NULL AFTER `affected_infrastructure` CHANGE COLUMN `affected_information_system` `affected_information_system` TEXT NULL DEFAULT NULL AFTER `affected_configuration_items` CHANGE COLUMN `concept_of_operation` `concept_of_operation` TEXT NULL DEFAULT NULL AFTER `affected_information_system` CHANGE COLUMN `concept_of_testing` `concept_of_testing` TEXT NULL DEFAULT NULL AFTER `concept_of_operation` CHANGE COLUMN `concept_of_implementation` `concept_of_implementation` TEXT NULL DEFAULT NULL AFTER `concept_of_testing` CHANGE COLUMN `backout_plan` `backout_plan` TEXT NULL DEFAULT NULL AFTER `concept_of_implementation`'
    );
  }
}
