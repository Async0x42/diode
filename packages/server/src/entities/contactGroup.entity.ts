import { IContactGroup } from '@diode/common';
import { Property, MaxLength, Required } from "@tsed/schema";
import { Entity, Property as Column, ManyToMany, Collection, OneToMany, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Contact } from './contact.entity';
import { Server } from './server.entity';

// Quick fix to make @mikro-orm collection compat with the common interface
export interface IBackendContactGroup extends Omit<IContactGroup, 'contacts' | 'supportedServers'> {
  contacts: Collection<Contact>;
  supportedServers: Collection<Server>;
}

@Entity()
export class ContactGroup extends DiodeEntity<ContactGroup> implements IBackendContactGroup {
  @Column()
  @Required()
  name!: string;

  @Column()
  phone?: string;

  @Column()
  email?: string;

  @Column()
  title?: string;

  @Column()
  organization?: string;

  @Column()
  department?: string;

  @Column({ columnType: 'text' })
  notes?: string;

  @ManyToMany(() => Contact, (contact) => contact.contactGroups, { owner: true })
  contacts = new Collection<Contact>(this);

  @ManyToMany(() => Server, (server) => server.supportGroups)
  supportedServers = new Collection<Server>(this);
}
