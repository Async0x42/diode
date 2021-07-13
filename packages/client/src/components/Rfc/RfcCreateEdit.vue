<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { IRfc } from '@diode/common';
import type { PropType } from 'vue';
import { useMessage } from 'naive-ui';
import { useFormActions } from '~/logic';
import { assignDefaultsToForm, createFormModel } from '~/utils/forms';
const message = useMessage();

const props = defineProps({
  rfc: { type: Object as PropType<IRfc> },
});

const { onSubmit, onDelete } = useFormActions<IRfc>('/api/rfcs', 'rfcs', props.rfc);

const model = createFormModel<IRfc>([
  'title',
  'application',
  'rfcClass',
  'purpose',
  'rfcNumber',
  'impactAssessmentDueDate',
  'description',
  'status',
  'parentSystem',
  'businessCase',
  'securityImplications',
  'affectedInfrastructure',
  'affectedConfigurationItems',
  'affectedConfigurationItems',
  'affectedInformationSystem',
  'conceptOfOperation',
  'conceptOfTesting',
  'conceptOfImplementation',
  'backoutPlan',
]);
const rules = {
  title: [
    {
      required: true,
      message: 'Title is required',
      trigger: ['input', 'blur'],
    },
  ],
  application: [
    {
      required: true,
      message: 'Application is required',
    },
  ],
  status: [
    {
      required: true,
      message: 'Status is required',
      trigger: ['input', 'blur'],
    },
  ],
  rfcClass: [
    {
      required: true,
      message: 'Class is required',
      trigger: ['input', 'blur'],
    },
  ],
  purpose: [
    {
      required: true,
      message: 'Purpose is required',
      trigger: ['input', 'blur'],
    },
  ],
};
assignDefaultsToForm(model, props.rfc);

const formRef = ref(null as any);
const handleValidateClick = (e: Event) => {
  e.preventDefault();
  formRef.value.validate((errors: any) => {
    if (!errors) {
      message.success('Valid');
      onSubmit(model.value);
    } else {
      console.log(errors);
      message.error('Invalid');
    }
  });
};
</script>

<template>
  <n-page-header class="mx-8 mt-6" title="RFC Information" />
  <n-form ref="formRef" :rules="rules" :model="model" class="mx-12">
    <n-grid :span="12" :x-gap="12">
      <n-form-item-gi :span="12" label="Title" path="title">
        <n-input v-model:value="model.title" placeholder="" />
        <n-text tag="div" depth="3"
          >This field is mandatory. A brief title that reflects the proposed change. Keeping in mind that this field will be used as a potential
          search criteria therefore avoid making the title too generic.</n-text
        >
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="RFC Number" path="rfcNumber">
        <n-input-number v-model:value="model.rfcNumber" :show-button="false" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Application" path="application">
        <FormApplicationSelect v-model:value="model.application" placeholder="" />
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Current Status" path="status">
        <FormSelect
          v-model:value="model.status"
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
        />
        <n-text tag="div" depth="3">
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
              The RFC has been validated and is ready for Impact Assessment (IA). The Change Agent will request IA from designated individuals and
              organizations, within a predetermined timeframe. When all IAs have been returned and assessed, the Change Agent will determine the
              feasibility to approve the RFC or pursue otherwise.
            </p>
            <p>
              Not Approved:
              <br />
              Upon completion of assessing the Impact Analyses gathered, the Change Agent has determined that the RFC has been rejected for business,
              technical or operational reasons.
            </p>

            <p>
              Deferred:
              <br />
              A RFC may be deferred if the Change Agent deems that circumstances surrounding the change do not warrant further consideration of the
              RFC at this time. Although Deferred RFCs are placed temporarily outside of the Change Management process, this does not preclude the
              Change Initiator from continuing work on the RFC to address the issues that led to its deferral. All Deferred RFCs will be annotated
              with a Bring Forward Date, at which time they will re-enter the Change Management process at the Change Agent Validation stage
            </p>
            <p>
              Approved:
              <br />
              The appropriate Change Agent has approved The RFC for implementation.
            </p>
            <p>
              Closed:
              <br />
              The change has been implemented, verified by the Initiator, and confirmed by the Change Agent who completes the lifecycle by closing the
              RFC.
            </p>
            <p>
              Cancelled:
              <br />
              The Change Authority assigns A status of Cancelled to an RFC when circumstances warrant the cessation of further staffing or
              implementation of the proposed change. A RFC must be cancelled when the proposed change cannot be implemented as originally proposed.
            </p>
            <p>
              Returned for Modification:
              <br />
              The Change Agent returns the RFC to the Initiator in order for modifications to be made to the RFC as specified or requested by a
              Subject Matter Expert (SME).
            </p>
          </div></n-text
        >
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Class" path="rfcClass">
        <FormSelect v-model:value="model.rfcClass" :options="['Draft', '1', '2', '3']" />
        <n-text tag="div" depth="3">
          <div class="space-y-2 mt-2 text-sm text-gray-500">
            <!-- was a p -->
            <p>
              These descriptions are guidelines and are not absolute. The overriding consideration should be the measurable impact on related
              Configuration Items (CIs) and organizations.
            </p>
            <p>
              Draft:
              <br />
              When a new RFC is initiated, it’s classification is defaulted to RFCs. A draft RFC implies that it is still being worked on and as a
              result, is not yet viewable by other users. Once the Local Authority (LA) has reviewed the RFC, they will assign its class as Class 1,
              Class 2 or Class 3 based on the potential impact as defined below. During processing, the Classification of a Change may be amended to a
              more appropriate level should it be determined that the Change needs to be escalated or de-escalated.
            </p>
            <p>
              Class 1:
              <br />
              A Change that has Departmental level impact such as an impact on common Information Management (IM) services (as defined in IMD 100) or
              standards, IM policies, or that impacts more than one Environmental Command or Group Principle (EC/GP). This class of change includes
              the modification of Configuration Items (CIs) used by more than one specific user community (EC/GP) nationally. The Information
              Management Configuration Control Board (IM CCB) approves all Class 1 Changes. For an Immediate Class 1 change, impact assessments must
              be submitted within 24 hours of the RFC being opened for Impact Assessment. Routine Class 1 impact assessments have a submission
              deadline of 10 business days.
            </p>
            <p>
              Class 2:
              <br />
              A change that impacts functional IM Services (as defined in IMD 100) but does not have an impact on common IM services and standards.
              Class 2 changes only affect Configuration Items (CIs) solely within a specific user community (EC/GP). For Class 2 impact assessment
              turnaround times please consult the appropriate Change Management Agent (CMA). The appropriate EC/GP CCB or CMA shall approve class 2
              changes.
            </p>
            <p>
              Class 3:
              <br />
              A change that impacts the Local (delegated authority) level (Base, Wing, Formation or Units) but does not impact common or functional IM
              services or standards. This change only affects Configuration Items (CIs) that are used by a subset of users of a specific user
              community (EC/GP). Class 3 changes only affect CIs solely within a specific user community (EC/GP). For Class 3 impact assessment
              turnaround times please consult the appropriate Local Authority (LA). The appropriate Base/Wing/Formation CCB or LA is responsible for
              approving Class 3 changes.
            </p>
          </div></n-text
        >
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Purpose" path="purpose">
        <FormSelect v-model:value="model.purpose" :options="['Sustain', 'Evolve', 'Transform']" />
        <n-text tag="div" depth="3">
          <div class="space-y-2 mt-2 text-sm text-gray-500">
            <!-- was a p -->
            <p>
              This field is mandatory. It documents why this particular change is required. Only one reason can be selected for the RFC. "The
              following definitions for "PURPOSE" apply:
            </p>
            <p>
              SUSTAIN: The maintenance of the current level of IM/IT services from end-to-end includes:. Involves no new architecture. Provides
              continuity, Maintenance and Minor Enhancements to maintain existing IM/IT services. Sustains IM/IT service of an existing capability by
              addressing aging components or deficiencies that limit its ongoing use. Requires negligible new capability or functionality added.
              Production status services and ongoing operational activities to support core Departmental programs and keep the lights on. Day-to-day
              client service commitments through multiple service channels. Supports program and corporate services operations. Critical changes to
              the sustain environment.
            </p>
            <p>
              EVOLVE: Includes major enhancements to the existing IM/IT services in order to maintain and/or advance the existing capability within
              the sustainment program: Driven by a business need to deliver an additional capability or to position an existing asset for anticipated
              needs by adding capability. Scope may involve multiple systems, programs, or organizational entities (functional and/or operational
              authorities) but with clear delineation among functional and/or operational authorities as established through governance mechanisms.
            </p>
            <p>
              TRANSFORM: Includes new IM/IT Services & Capabilities: Vote 5 projects. Partner Program Transformation. TBS CIOB Strategic Projects –
              Enterprise-wide files. GC IT Enterprise Services ( SSC's initiatives i.e. ETI, Data Center, etc.). New IT Strategy resulting from major
              policy/legislative change. Major Modifications or additions to established program activities".
            </p>
          </div></n-text
        >
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Description" path="description">
        <n-input
          v-model:value="model.description"
          type="textarea"
          placeholder=""
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
        <n-text tag="div" depth="3"
          >This IM CCB mandatory field is used to provide a clear, detailed, but concise description of the proposed change. References to other RFCs
          may be used if applicable</n-text
        >
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Business Case" path="businessCase">
        <n-input
          v-model:value="model.businessCase"
          type="textarea"
          placeholder=""
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
        <n-text tag="div" depth="3">
          This IM CCB mandatory field is used to provide a description of the business justification (need) of the change. If a formal business case
          has been prepared, attach it to the File Attachments section below, and include a phrase referring to it. An approved business plan is
          required to ensure the availability of necessary resources and funding to effect the proposed change.
        </n-text>
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Security Implications" path="securityImplications">
        <n-input v-model:value="model.securityImplications" placeholder="" />
        <n-text tag="div" depth="3">
          If a valid Certification and Accreditation (C&A) or Interim Approval to Proceed (IAP) exists, attach them or provide the appropriate
          reference to them. If not, attach the Concept of Operations (CONOPS), Statement of Sensitivity (SoS) and sufficient information so the ISSO
          can properly assess the security implication of the change. Please contact your ISSO for more information to assist you with the completion
          of these deliverables (http://admim-smagi.mil.ca/en/security/policies-standards/process-dim-secur.page) which may or may not be required if
          previously submitted.</n-text
        >
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Parent System" path="parentSystem">
        <n-input
          v-model:value="model.parentSystem"
          type="textarea"
          placeholder=""
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
        <n-text tag="div" depth="3">
          Identify the primary Parent System, and any of its related Configuration Items (CIs), that are/may be impacted by the proposed change. For
          instance, a change in application software may require a need to upgrade the Foundation Software that in turn may impact the Server
          processing or disk storage capacity. Identify any changes to interface requirements. For instance, a change in one application that may
          impact the way or the type of information that is exchanged to another application
        </n-text>
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Affected Infrastructure" path="affectedInfrastructure">
        <n-input
          v-model:value="model.affectedInfrastructure"
          type="textarea"
          placeholder=""
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
        <n-text tag="div" depth="3">
          This IM CCB mandatory field is used to identify the affected infrastructure (hardware or facilities) that may be impacted by the proposed
          change.</n-text
        >
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Affected Information Systems" path="affectedInformationSystem">
        <n-input
          v-model:value="model.affectedInformationSystem"
          type="textarea"
          placeholder=""
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
        <n-text tag="div" depth="3">
          This IM CCB mandatory field is used to further identify affected information systems such as Common Email or other applications that may be
          impacted by the proposed change in addition to the Affected Infrastructure.</n-text
        >
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Affected Configuration Items" path="affectedConfigurationItems">
        <n-input
          v-model:value="model.affectedConfigurationItems"
          type="textarea"
          placeholder=""
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
        <n-text tag="div" depth="3"
          ><div class="space-y-2 mt-2 text-sm text-gray-500">
            <!-- was a p -->
            <p>
              Provide specific details (configuration identification numbers) about the workstation, server and/or software affected by the requested
              change.
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
              For tracking purposes, it is requested that all network devices referenced in a RFC, appear in the Affected Configuration Items section
              of the RFC.
            </p>
          </div></n-text
        >
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Concept of Operation" path="conceptOfOperation">
        <n-input
          v-model:value="model.conceptOfOperation"
          type="textarea"
          placeholder=""
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
        <n-text tag="div" depth="3">
          This IM CCB mandatory field is used to enter the information directly in the space provided or upload your CONOPS document to the RFC. If
          the latter is the best option, indicate this in the space provided. This document provides basic information regarding the operation of the
          system and often forms the basis for security recommendations. The CONOPS must include, at a minimum: a description of the system, including
          any external connections; data sensitivity information and access limitations; the user communities for specific applications and equipment;
          personnel or positions and their proposed duties or responsibilities for operations, administration, security and maintenance; and
          anticipated modification/expansion of the system.</n-text
        >
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Concept of Testing" path="conceptOfTesting">
        <n-input
          v-model:value="model.conceptOfTesting"
          type="textarea"
          placeholder=""
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
        <n-text tag="div" depth="3">
          This IM CCB mandatory field is used to demonstrate to the appropriate approval authority that necessary testing has been successfully
          conducted and completed. Testing must be performed to ensure compatibility, interoperability and functionality of the Configuration Item.
          Testing documentation (plan and/or results), it should be uploaded/attached to the RFC for review.
        </n-text>
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Concept of Testing" path="conceptOfTesting">
        <n-input
          v-model:value="model.conceptOfTesting"
          type="textarea"
          placeholder=""
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
        <n-text tag="div" depth="3">
          This IM CCB mandatory field is used to demonstrate to the appropriate approval authority that necessary testing has been successfully
          conducted and completed. Testing must be performed to ensure compatibility, interoperability and functionality of the Configuration Item.
          Testing documentation (plan and/or results), it should be uploaded/attached to the RFC for review.
        </n-text>
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Concept of Implementation" path="conceptOfImplementation">
        <n-input
          v-model:value="model.conceptOfImplementation"
          type="textarea"
          placeholder=""
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
        <n-text tag="div" depth="3">
          This IM CCB mandatory field is used to provide implementation information which allows the service provider/implementer to review and
          understand the method of implementing the planned change. This can include scheduling, time, date and location of the change to occur,
          affected parties/users etc. If available, an Implementation plan should be attached to the RFC and referenced in this field.
        </n-text>
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Backout Plan" path="backoutPlan">
        <n-input
          v-model:value="model.backoutPlan"
          type="textarea"
          placeholder=""
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
        <n-text tag="div" depth="3"> Description of activities required should the implementation of the requested change fail.</n-text>
      </n-form-item-gi>

      <n-form-item-gi :span="12" label="Impact Assessment Due Date" path="impactAssessmentDueDate">
        <FormDatePicker v-model:value="model.impactAssessmentDueDate" />
      </n-form-item-gi>
    </n-grid>

    <n-space justify="end">
      <FormButtonDelete v-if="props.rfc" @delete="onDelete()" />
      <FormButtonCancel @click="$router.back()" />
      <FormButtonOk @click="handleValidateClick" />
    </n-space>
  </n-form>
</template>
