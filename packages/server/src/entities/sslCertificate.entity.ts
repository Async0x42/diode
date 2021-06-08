import { ISslCertificate } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class SslCertificate extends BaseEntity<SslCertificate, 'id'> implements ISslCertificate {
  @PrimaryKey()
  id!: number;

  @Property()
  sans!: string;

  @Property()
  expiry?: Date;

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
