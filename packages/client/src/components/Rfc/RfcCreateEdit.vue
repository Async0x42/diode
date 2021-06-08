<script setup lang="ts">
import { defineProps } from 'vue';
import type { IRfc } from '@diode/common';
import type { PropType } from 'vue';
import { useFormActions } from '~/logic';

const props = defineProps({
  rfc: { type: Object as PropType<IRfc> },
});

const { useField, onSubmit, onDelete } = useFormActions<IRfc>('/api/rfcs', 'rfcs', props.rfc);

const title = useField('title', {
  rule: { required: true },
});

const application = useField('application', {
  rule: { required: true },
});

const rfcClass = useField('rfcClass', {
  rule: { required: true },
});

const purpose = useField('purpose', {
  rule: { required: true },
});

const rfcNumber = useField('rfcNumber');
const impactAssessmentDueDate = useField('impactAssessmentDueDate');
const description = useField('description');
const status = useField('status');
const parentSystem = useField('parentSystem');
const businessCase = useField('businessCase');
const securityImplications = useField('securityImplications');
const affectedInfrastructure = useField('affectedInfrastructure');
const affectedConfigurationItems = useField('affectedConfigurationItems');
const affectedInformationSystem = useField('affectedInformationSystem');
const conceptOfOperation = useField('conceptOfOperation');
const conceptOfTesting = useField('conceptOfTesting');
const conceptOfImplementation = useField('conceptOfImplementation');
const backoutPlan = useField('backoutPlan');
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <form class="divide-y space-y-8 divide-gray-200 py-5 px-4 sm:px-6" @submit="onSubmit">
      <div class="divide-y space-y-8 divide-gray-200">
        <div>
          <div>
            <h3 class="font-medium text-lg text-gray-900 leading-6">Rfc Information</h3>
            <p class="mt-1 text-sm text-gray-500">RFC details and notes.</p>
          </div>

          <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-6">
            <FormInput label="Title" :field="title" name="title" class="sm:col-span-6">
              <template #note>
                <p class="mt-2 text-sm text-gray-500">
                  This field is mandatory. A brief title that reflects the proposed change. Keeping in mind that this field will be used as a
                  potential search criteria therefore avoid making the title too generic.
                </p>
              </template>
            </FormInput>

            <FormInput label="RFC Number" :field="rfcNumber" name="rfcNumber" class="sm:col-span-3" />

            <FormApplicationSelect label="Application" :field="application" name="application" class="sm:col-span-3" />

            <FormSelect
              label="Status"
              :field="status"
              name="status"
              class="sm:col-span-3"
              :options="[
                'New',
                'Open for Impact Analysis',
                'Not Approved',
                'Deferred',
                'Approved',
                'Approved Conditionally',
                'Closed',
                'Cancelled',
                'Returned for Modification',
              ]"
            >
              <template #note>
                <div class="space-y-2 mt-2 text-sm text-gray-500">
                  <!-- was a p -->
                  <p>
                    New:
                    <br />
                    Indicates the RFC has been submitted for validation and processing.
                  </p>
                  <p>
                    Open for Impact Analysis:
                    <br />
                    The RFC has been validated and is ready for Impact Assessment (IA). The Change Agent will request IA from designated individuals
                    and organizations, within a predetermined timeframe. When all IAs have been returned and assessed, the Change Agent will determine
                    the feasibility to approve the RFC or pursue otherwise.
                  </p>
                  <p>
                    Not Approved:
                    <br />
                    Upon completion of assessing the Impact Analyses gathered, the Change Agent has determined that the RFC has been rejected for
                    business, technical or operational reasons.
                  </p>

                  <p>
                    Deferred:
                    <br />
                    A RFC may be deferred if the Change Agent deems that circumstances surrounding the change do not warrant further consideration of
                    the RFC at this time. Although Deferred RFCs are placed temporarily outside of the Change Management process, this does not
                    preclude the Change Initiator from continuing work on the RFC to address the issues that led to its deferral. All Deferred RFCs
                    will be annotated with a Bring Forward Date, at which time they will re-enter the Change Management process at the Change Agent
                    Validation stage
                  </p>
                  <p>
                    Approved:
                    <br />
                    The appropriate Change Agent has approved The RFC for implementation.
                  </p>
                  <p>
                    Closed:
                    <br />
                    The change has been implemented, verified by the Initiator, and confirmed by the Change Agent who completes the lifecycle by
                    closing the RFC.
                  </p>
                  <p>
                    Cancelled:
                    <br />
                    The Change Authority assigns A status of Cancelled to an RFC when circumstances warrant the cessation of further staffing or
                    implementation of the proposed change. A RFC must be cancelled when the proposed change cannot be implemented as originally
                    proposed.
                  </p>
                  <p>
                    Returned for Modification:
                    <br />
                    The Change Agent returns the RFC to the Initiator in order for modifications to be made to the RFC as specified or requested by a
                    Subject Matter Expert (SME).
                  </p>
                </div>
              </template>
            </FormSelect>

            <FormSelect label="Class" :field="rfcClass" name="rfcClass" class="sm:col-span-3" :options="['Draft', '1', '2', '3']">
              <template #note>
                <div class="space-y-2 mt-2 text-sm text-gray-500">
                  <!-- was a p -->
                  <p>
                    These descriptions are guidelines and are not absolute. The overriding consideration should be the measurable impact on related
                    Configuration Items (CIs) and organizations.
                  </p>
                  <p>
                    Draft:
                    <br />
                    When a new RFC is initiated, it’s classification is defaulted to RFCs. A draft RFC implies that it is still being worked on and as
                    a result, is not yet viewable by other users. Once the Local Authority (LA) has reviewed the RFC, they will assign its class as
                    Class 1, Class 2 or Class 3 based on the potential impact as defined below. During processing, the Classification of a Change may
                    be amended to a more appropriate level should it be determined that the Change needs to be escalated or de-escalated.
                  </p>
                  <p>
                    Class 1:
                    <br />
                    A Change that has Departmental level impact such as an impact on common Information Management (IM) services (as defined in IMD
                    100) or standards, IM policies, or that impacts more than one Environmental Command or Group Principle (EC/GP). This class of
                    change includes the modification of Configuration Items (CIs) used by more than one specific user community (EC/GP) nationally.
                    The Information Management Configuration Control Board (IM CCB) approves all Class 1 Changes. For an Immediate Class 1 change,
                    impact assessments must be submitted within 24 hours of the RFC being opened for Impact Assessment. Routine Class 1 impact
                    assessments have a submission deadline of 10 business days.
                  </p>
                  <p>
                    Class 2:
                    <br />
                    A change that impacts functional IM Services (as defined in IMD 100) but does not have an impact on common IM services and
                    standards. Class 2 changes only affect Configuration Items (CIs) solely within a specific user community (EC/GP). For Class 2
                    impact assessment turnaround times please consult the appropriate Change Management Agent (CMA). The appropriate EC/GP CCB or CMA
                    shall approve class 2 changes.
                  </p>
                  <p>
                    Class 3:
                    <br />
                    A change that impacts the Local (delegated authority) level (Base, Wing, Formation or Units) but does not impact common or
                    functional IM services or standards. This change only affects Configuration Items (CIs) that are used by a subset of users of a
                    specific user community (EC/GP). Class 3 changes only affect CIs solely within a specific user community (EC/GP). For Class 3
                    impact assessment turnaround times please consult the appropriate Local Authority (LA). The appropriate Base/Wing/Formation CCB or
                    LA is responsible for approving Class 3 changes.
                  </p>
                </div>
              </template>
            </FormSelect>

            <FormSelect label="Purpose" :field="purpose" name="purpose" class="sm:col-span-3" :options="['Sustain', 'Evolve', 'Transform']">
              <template #note>
                <div class="space-y-2 mt-2 text-sm text-gray-500">
                  <!-- was a p -->
                  <p>
                    This field is mandatory. It documents why this particular change is required. Only one reason can be selected for the RFC. "The
                    following definitions for "PURPOSE" apply:
                  </p>
                  <p>
                    SUSTAIN: The maintenance of the current level of IM/IT services from end-to-end includes:. Involves no new architecture. Provides
                    continuity, Maintenance and Minor Enhancements to maintain existing IM/IT services. Sustains IM/IT service of an existing
                    capability by addressing aging components or deficiencies that limit its ongoing use. Requires negligible new capability or
                    functionality added. Production status services and ongoing operational activities to support core Departmental programs and keep
                    the lights on. Day-to-day client service commitments through multiple service channels. Supports program and corporate services
                    operations. Critical changes to the sustain environment.
                  </p>
                  <p>
                    EVOLVE: Includes major enhancements to the existing IM/IT services in order to maintain and/or advance the existing capability
                    within the sustainment program: Driven by a business need to deliver an additional capability or to position an existing asset for
                    anticipated needs by adding capability. Scope may involve multiple systems, programs, or organizational entities (functional
                    and/or operational authorities) but with clear delineation among functional and/or operational authorities as established through
                    governance mechanisms.
                  </p>
                  <p>
                    TRANSFORM: Includes new IM/IT Services & Capabilities: Vote 5 projects. Partner Program Transformation. TBS CIOB Strategic
                    Projects – Enterprise-wide files. GC IT Enterprise Services ( SSC's initiatives i.e. ETI, Data Center, etc.). New IT Strategy
                    resulting from major policy/legislative change. Major Modifications or additions to established program activities".
                  </p>
                </div>
              </template>
            </FormSelect>

            <FormTextArea label="Description" :field="description" name="description" class="sm:col-span-6">
              <template #note>
                <p class="mt-2 text-sm text-gray-500">
                  This IM CCB mandatory field is used to provide a clear, detailed, but concise description of the proposed change. References to
                  other RFCs may be used if applicable
                </p>
              </template>
            </FormTextArea>

            <FormTextArea label="Business Case" :field="businessCase" name="businessCase" class="sm:col-span-6">
              <template #note>
                <p class="mt-2 text-sm text-gray-500">
                  This IM CCB mandatory field is used to provide a description of the business justification (need) of the change. If a formal
                  business case has been prepared, attach it to the File Attachments section below, and include a phrase referring to it. An approved
                  business plan is required to ensure the availability of necessary resources and funding to effect the proposed change.
                </p>
              </template>
            </FormTextArea>

            <FormInput label="Security Implications" :field="securityImplications" name="securityImplications" class="sm:col-span-6">
              <template #note>
                <p class="mt-2 text-sm text-gray-500">
                  If a valid Certification and Accreditation (C&A) or Interim Approval to Proceed (IAP) exists, attach them or provide the appropriate
                  reference to them. If not, attach the Concept of Operations (CONOPS), Statement of Sensitivity (SoS) and sufficient information so
                  the ISSO can properly assess the security implication of the change. Please contact your ISSO for more information to assist you
                  with the completion of these deliverables (http://admim-smagi.mil.ca/en/security/policies-standards/process-dim-secur.page) which
                  may or may not be required if previously submitted.
                </p>
              </template>
            </FormInput>

            <FormTextArea label="Parent System" :field="parentSystem" name="parentSystem" class="sm:col-span-6">
              <template #note>
                <p class="mt-2 text-sm text-gray-500">
                  Identify the primary Parent System, and any of its related Configuration Items (CIs), that are/may be impacted by the proposed
                  change. For instance, a change in application software may require a need to upgrade the Foundation Software that in turn may impact
                  the Server processing or disk storage capacity. Identify any changes to interface requirements. For instance, a change in one
                  application that may impact the way or the type of information that is exchanged to another application
                </p>
              </template>
            </FormTextArea>

            <FormTextArea label="Affected Infrastructure" :field="affectedInfrastructure" name="affectedInfrastructure" class="sm:col-span-6">
              <template #note>
                <p class="mt-2 text-sm text-gray-500">
                  This IM CCB mandatory field is used to identify the affected infrastructure (hardware or facilities) that may be impacted by the
                  proposed change.
                </p>
              </template>
            </FormTextArea>

            <FormTextArea
              label="Affected Information Systems"
              :field="affectedInformationSystem"
              name="affectedInformationSystem"
              class="sm:col-span-6"
            >
              <template #note>
                <p class="mt-2 text-sm text-gray-500">
                  This IM CCB mandatory field is used to further identify affected information systems such as Common Email or other applications that
                  may be impacted by the proposed change in addition to the Affected Infrastructure.
                </p>
              </template>
            </FormTextArea>

            <FormTextArea
              label="Affected Configuration Items"
              :field="affectedConfigurationItems"
              name="affectedConfigurationItems"
              class="sm:col-span-6"
            >
              <template #note>
                <div class="space-y-2 mt-2 text-sm text-gray-500">
                  <!-- was a p -->
                  <p>
                    Provide specific details (configuration identification numbers) about the workstation, server and/or software affected by the
                    requested change.
                  </p>

                  <p>
                    All network devices (such as servers, workstations and routers) are expected to conform to the DND Naming Standards Policy (IMS
                    6002-1-1).
                  </p>

                  <p>
                    The IMS 6002-1-1 Policy applies to all DND networks, both Designated and Classified. The detailed document can be found at:
                    http://img-ggi.mil.ca/pi-ip/dao-doa/index-eng.asp
                  </p>

                  <p>The IMS 6002-1-1 syntax is: [SupportUnit]hyphen[Location/Owner]hyphen[Function Code][Physical or Virtual][SequenceNumber]</p>

                  <p>
                    For tracking purposes, it is requested that all network devices referenced in a RFC, appear in the Affected Configuration Items
                    section of the RFC.
                  </p>
                </div>
              </template>
            </FormTextArea>

            <FormTextArea label="Concept of Operation" :field="conceptOfOperation" name="conceptOfOperation" class="sm:col-span-6">
              <template #note>
                <p class="mt-2 text-sm text-gray-500">
                  This IM CCB mandatory field is used to enter the information directly in the space provided or upload your CONOPS document to the
                  RFC. If the latter is the best option, indicate this in the space provided. This document provides basic information regarding the
                  operation of the system and often forms the basis for security recommendations. The CONOPS must include, at a minimum: a description
                  of the system, including any external connections; data sensitivity information and access limitations; the user communities for
                  specific applications and equipment; personnel or positions and their proposed duties or responsibilities for operations,
                  administration, security and maintenance; and anticipated modification/expansion of the system.
                </p>
              </template>
            </FormTextArea>

            <FormTextArea label="Concept of Testing" :field="conceptOfTesting" name="conceptOfTesting" class="sm:col-span-6">
              <template #note>
                <p class="mt-2 text-sm text-gray-500">
                  This IM CCB mandatory field is used to demonstrate to the appropriate approval authority that necessary testing has been
                  successfully conducted and completed. Testing must be performed to ensure compatibility, interoperability and functionality of the
                  Configuration Item. Testing documentation (plan and/or results), it should be uploaded/attached to the RFC for review.
                </p>
              </template>
            </FormTextArea>

            <FormTextArea label="Concept of Implementation" :field="conceptOfImplementation" name="conceptOfImplementation" class="sm:col-span-6">
              <template #note>
                <p class="mt-2 text-sm text-gray-500">
                  This IM CCB mandatory field is used to provide implementation information which allows the service provider/implementer to review
                  and understand the method of implementing the planned change. This can include scheduling, time, date and location of the change to
                  occur, affected parties/users etc. If available, an Implementation plan should be attached to the RFC and referenced in this field.
                </p>
              </template>
            </FormTextArea>

            <FormTextArea label="Backout Plan" :field="backoutPlan" name="backoutPlan" class="sm:col-span-6">
              <template #note>
                <p class="mt-2 text-sm text-gray-500">Description of activities required should the implementation of the requested change fail.</p>
              </template>
            </FormTextArea>

            <FormDatePicker
              label="Impact Assessment Due Date"
              :field="impactAssessmentDueDate"
              name="impactAssessmentDueDate"
              class="sm:col-span-3"
            />
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <FormButtonDelete v-if="props.rfc" class="mr-3 inline-flex justify-center" @click="onDelete()" />
          <div class="flex-1"></div>
          <FormButtonCancel @click="$router.back()" />
          <FormButtonOk class="ml-3 inline-flex justify-center" />
        </div>
      </div>
    </form>
  </div>
</template>
