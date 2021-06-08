import { IApplication } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, ManyToMany, Collection, OneToMany } from '@mikro-orm/core';
import { Brd } from './brd.entity';
import { Fqdn } from './fqdn.entity';
import { Rfc } from './rfc.entity';
import { Server } from './server.entity';
import { SslCertificate } from './sslCertificate.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendApplication extends Omit<IApplication, 'fqdns' | 'servers' | 'brds' | 'rfcs' | 'sslCertificates'> {
  fqdns: Collection<Fqdn>;
  servers: Collection<Server>;
  brds: Collection<Brd>;
  rfcs: Collection<Rfc>;
  sslCertificates: Collection<SslCertificate>;
}

@Entity()
export class Application extends BaseEntity<Application, 'id'> implements IBackendApplication {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  shortName?: string;

  @Property({ columnType: 'text' })
  description?: string;

  @ManyToMany(() => Fqdn, (fqdn) => fqdn.applications, { owner: true })
  fqdns = new Collection<Fqdn>(this);

  @ManyToMany(() => Server, (server) => server.applications, { owner: true })
  servers = new Collection<Server>(this);

  @ManyToMany(() => SslCertificate, (sslCert) => sslCert.applications, { owner: true })
  sslCertificates = new Collection<SslCertificate>(this);

  @OneToMany(() => Brd, (brd) => brd.application)
  brds = new Collection<Brd>(this);

  @OneToMany(() => Rfc, (rfc) => rfc.application)
  rfcs = new Collection<Rfc>(this);

  @Property({ onCreate: () => new Date() })
  createdOn = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedOn = new Date();
}
