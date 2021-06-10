import { ISslCertificate } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, Collection, ManyToMany, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { Application } from './application.entity';
import { Server } from './server.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendSslCertificate extends Omit<ISslCertificate, 'servers' | 'applications'> {
  servers: Collection<Server>;
  applications: Collection<Application>;
}

@Entity()
export class SslCertificate extends BaseEntity<SslCertificate, 'id'> implements IBackendSslCertificate {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string; // won't be saved in the database

  @Property()
  sans!: string;

  @Property()
  expiry?: Date;

  @ManyToMany(() => Server, (server) => server.sslCertificates)
  servers = new Collection<Server>(this);

  @ManyToMany(() => Application, (application) => application.sslCertificates)
  applications = new Collection<Application>(this);

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
