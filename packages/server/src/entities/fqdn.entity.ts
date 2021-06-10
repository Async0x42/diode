import { IFqdn } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, ManyToOne, ManyToMany, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Application } from './application.entity';
import { Server } from './server.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendFqdn extends Omit<IFqdn, 'server' | 'applications'> {
  server?: Server;
  applications?: Application;
}

@Entity()
export class Fqdn extends BaseEntity<Fqdn, 'id'> implements IBackendFqdn {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string; // won't be saved in the database

  @Property()
  name!: string;

  @ManyToOne()
  server?: Server;

  @ManyToMany(() => Application, (application) => application.fqdns)
  applications?: Application;

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
