import { IWorkOrder, WorkOrderStatus } from '@diode/common';
import { Property, MaxLength, Required } from "@tsed/schema";
import { Entity, Property as Column, ManyToMany, Collection, OneToMany, ManyToOne } from '@mikro-orm/core';
import { DiodeEntity } from './diode.entity';
import { Application } from './application.entity';
import { Contact } from './contact.entity';
import { Server } from './server.entity';

// Quick fix to make @mikro-orm collection compat with the IWorkOrder []
export interface IBackendWorkOrder extends Omit<IWorkOrder, 'applications' | 'servers' | 'owners'> {
  applications: Collection<Application>;
  servers: Collection<Server>;
  owners: Collection<Contact>;
}

@Entity()
export class WorkOrder extends DiodeEntity<WorkOrder> implements IBackendWorkOrder {
  @Column()
  @Required()
  name!: string;

  @Column({ columnType: 'text' })
  details?: string;

  @ManyToMany(() => Application, (application) => application.workOrders, { owner: true })
  applications = new Collection<Application>(this);

  @ManyToMany(() => Server, (server) => server.workOrders, { owner: true })
  servers = new Collection<Server>(this);

  @ManyToMany(() => Contact, (contact) => contact.workOrders, { owner: true })
  owners = new Collection<Contact>(this);

  @Column()
  startDate?: Date;

  @Column()
  endDate?: Date;

  @Column()
  status?: WorkOrderStatus;
}
