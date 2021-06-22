import { IContact } from '@diode/common';
import { Entity, Property, Collection, ManyToMany } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { ContactGroup } from './contactGroup.entity';
import { WorkOrder } from './workOrder.entity';

// Quick fix to make @mikro-orm collection compat with the common interface
export interface IBackendContact extends Omit<IContact, 'contactGroups' | 'workOrders'> {
  contactGroups: Collection<ContactGroup>;
  workOrders: Collection<WorkOrder>;
}

@Entity()
export class Contact extends DiodeEntity<Contact> implements IBackendContact {
  @Property()
  name!: string;

  @Property()
  phone?: string;

  @Property()
  email?: string;

  @Property()
  title?: string;

  @Property()
  organization?: string;

  @Property()
  department?: string;

  @Property({ columnType: 'text' })
  notes?: string;

  @ManyToMany(() => ContactGroup, (contactGroup) => contactGroup.contacts)
  contactGroups = new Collection<ContactGroup>(this);

  @ManyToMany(() => WorkOrder, (workOrder) => workOrder.owners)
  workOrders = new Collection<WorkOrder>(this);
}
