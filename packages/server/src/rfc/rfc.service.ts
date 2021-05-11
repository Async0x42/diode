import { v4 as uuidv4 } from 'uuid';

/**
 * Data Model Interfaces
 */

import { BaseRfc, Rfc, Rfcs } from '@daiod/common';

/**
 * In-Memory Store
 */

const rfcs: Rfcs = {
  '810f136b-f8b1-4967-a665-c7f914b60cc4': {
    id: '810f136b-f8b1-4967-a665-c7f914b60cc4',
    title: 'Pizza RFC1',
    class: 'Class 1',
    purpose: 'Evolve',
    description: 'This is a pizza rfc',
    parentSystem: 'Some network',
    businessCase: 'Do I have one?',
    securityImplications: 'Requires SSL encryption',
    affectedInfrastructure: 'Server A',
    affectedInformationSystem: 'Application B',
    conceptOfOperation: 'We will run it',
    conceptOfTesting: 'We will test it',
    conceptofImplementation: 'We will implement it',
    backoutPlan: 'We will remove it',
    impactAssessmentDueDate: new Date(2021, 3, 30),
  },
  'eb8b63b7-7143-4a14-b24c-37fc9aa862c6': {
    id: 'eb8b63b7-7143-4a14-b24c-37fc9aa862c6',
    title: 'Pizza RFC2',
    class: 'Class 1',
    purpose: 'Evolve',
    description: 'This is a pizza rfc',
    parentSystem: 'Some network',
    businessCase: 'Do I have one?',
    securityImplications: 'Requires SSL encryption',
    affectedInfrastructure: 'Server A',
    affectedInformationSystem: 'Application B',
    conceptOfOperation: 'We will run it',
    conceptOfTesting: 'We will test it',
    conceptofImplementation: 'We will implement it',
    backoutPlan: 'We will remove it',
    impactAssessmentDueDate: new Date(2021, 6, 30),
  },
  '0e17f378-0f90-4d8e-a147-ab0383077519': {
    id: '0e17f378-0f90-4d8e-a147-ab0383077519',
    title: 'Pizza RFC3',
    class: 'Class 1',
    purpose: 'Evolve',
    description: 'This is a pizza rfc',
    parentSystem: 'Some network',
    businessCase: 'Do I have one?',
    securityImplications: 'Requires SSL encryption',
    affectedInfrastructure: 'Server A',
    affectedInformationSystem: 'Application B',
    conceptOfOperation: 'We will run it',
    conceptOfTesting: 'We will test it',
    conceptofImplementation: 'We will implement it',
    backoutPlan: 'We will remove it',
    impactAssessmentDueDate: new Date(2021, 5, 30),
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Rfc[]> => Object.values(rfcs) || [];

export const find = async (id: string): Promise<Rfc> => rfcs[id];

export const create = async (newRFC: BaseRfc): Promise<Rfc> => {
  const id = uuidv4();

  rfcs[id] = {
    id,
    ...newRFC,
  };

  return rfcs[id];
};

export const update = async (id: string, rfcUpdate: BaseRfc): Promise<Rfc | null> => {
  const rfc = await find(id);

  if (!rfc) {
    return null;
  }

  rfcs[id] = { id, ...rfcUpdate };

  return rfcs[id];
};

export const remove = async (id: string): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete rfcs[id];
};
