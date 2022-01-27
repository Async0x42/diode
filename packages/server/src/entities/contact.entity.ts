import { IContact } from '@diode/common';
import { Property, MaxLength, Required } from "@tsed/schema";
import { Entity, Property as Column, ManyToMany, Collection, OneToMany, ManyToOne } from '@mikro-orm/core';
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

  @ManyToMany(() => ContactGroup, (contactGroup) => contactGroup.contacts)
  contactGroups = new Collection<ContactGroup>(this);

  @ManyToMany(() => WorkOrder, (workOrder) => workOrder.owners)
  workOrders = new Collection<WorkOrder>(this);
}
