import { IApplication } from '@diode/common';
import { BaseEntity, Entity, Property, PrimaryKey, ManyToMany, Collection } from '@mikro-orm/core';
import { Fqdn } from './fqdn.entity';
import { Server } from './server.entity';

// Quick fix to make @mikro-orm collection compat with the IServer []
export interface IBackendApplication extends Omit<IApplication, 'fqdns' | 'servers'> {
  fqdns?: Collection<Fqdn>;
  servers?: Collection<Server>;
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
}
