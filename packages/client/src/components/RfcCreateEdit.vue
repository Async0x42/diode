<script setup lang="ts">
import { defineProps } from 'vue';
import { useForm } from 'vue-hooks-form';
import { useAxios } from '@vueuse/integrations';
import { useRouter } from 'vue-router';
import type { IRfc } from '@diode/common';
import type { PropType } from 'vue';

const props = defineProps({
  rfc: { type: Object as PropType<IRfc> },
});

const { useField, handleSubmit } = useForm<IRfc>({
  defaultValues: props.rfc,
});

const router = useRouter();

const title = useField('title', {
  rule: { required: true },
});

const rfcClass = useField('rfcClass', {
  rule: { required: true },
});

const purpose = useField('purpose');
const rfcNumber = useField('rfcNumber');
const impactAssessmentDueDate = useField('impactAssessmentDueDate');
const description = useField('description');
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

// TODO: remove async and display loading information and errors
const onSubmit = handleSubmit(async (formData) => {
  if (props.rfc == null) {
    // create
    const { data, isFinished } = await useAxios(`/api/rfcs`, { method: 'POST', data: formData });
    router.push({ name: 'rfcs' });
  } else {
    // update
    const { data, isFinished } = await useAxios(`/api/rfcs/${props.rfc.id}`, { method: 'PUT', data: formData });
    router.push({ name: 'rfcs' });
  }

  // on success, display checkmark transition and then redirect to the new/edited rfc
});

const onDelete = async () => {
  if (props.rfc != null) {
    const { data, isFinished } = await useAxios(`/api/rfcs/${props.rfc.id}`, { method: 'DELETE' });
    router.push({ name: 'rfcs' });
  }
};
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
            <div class="sm:col-span-6">
              <label for="title" class="font-medium text-sm text-gray-700 block"> Title </label>
              <div class="mt-1">
                <input
                  id="title"
                  :ref="title.ref"
                  v-model="title.value"
                  type="text"
                  name="title"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                This field is mandatory. A brief title that reflects the proposed change. Keeping in mind that this field will be used as a potential
                search criterion therefore avoid making the title too generic.
              </p>
            </div>

            <div class="sm:col-span-3">
              <label for="rfcClass" class="font-medium text-sm text-gray-700 block"> Class </label>
              <div class="mt-1">
                <select
                  id="rfcClass"
                  :ref="rfcClass.ref"
                  v-model="rfcClass.value"
                  name="rfcClass"
                  class="rounded-md border-gray-300 mt-1 text-base w-full py-2 pr-10 pl-3 block focus:outline-none sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option>Draft</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
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
                  result, is not yet viewable by other users. Once the Local Authority (LA) has reviewed the RFC, they will assign its class as Class
                  1, Class 2 or Class 3 based on the potential impact as defined below. During processing, the Classification of a Change may be
                  amended to a more appropriate level should it be determined that the Change needs to be escalated or de-escalated.
                </p>
                <p>
                  Class 1:
                  <br />
                  A Change that has Departmental level impact such as an impact on common Information Management (IM) services (as defined in IMD 100)
                  or standards, IM policies, or that impacts more than one Environmental Command or Group Principle (EC/GP). This class of change
                  includes the modification of Configuration Items (CIs) used by more than one specific user community (EC/GP) nationally. The
                  Information Management Configuration Control Board (IM CCB) approves all Class 1 Changes. For an Immediate Class 1 change, impact
                  assessments must be submitted within 24 hours of the RFC being opened for Impact Assessment. Routine Class 1 impact assessments have
                  a submission deadline of 10 business days.
                </p>
                <p>
                  Class 2:
                  <br />
                  A change that impacts functional IM Services (as defined in IMD 100) but does not have an impact on common IM services and
                  standards. Class 2 changes only affect Configuration Items (CIs) solely within a specific user community (EC/GP). For Class 2 impact
                  assessment turnaround times please consult the appropriate Change Management Agent (CMA). The appropriate EC/GP CCB or CMA shall
                  approve class 2 changes.
                </p>
                <p>
                  Class 3:
                  <br />
                  A change that impacts the Local (delegated authority) level (Base, Wing, Formation or Units) but does not impact common or
                  functional IM services or standards. This change only affects Configuration Items (CIs) that are used by a subset of users of a
                  specific user community (EC/GP). Class 3 changes only affect CIs solely within a specific user community (EC/GP). For Class 3 impact
                  assessment turnaround times please consult the appropriate Local Authority (LA). The appropriate Base/Wing/Formation CCB or LA is
                  responsible for approving Class 3 changes.
                </p>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="purpose" class="font-medium text-sm text-gray-700 block"> Purpose </label>
              <div class="mt-1">
                <select
                  id="purpose"
                  :ref="purpose.ref"
                  v-model="purpose.value"
                  name="purpose"
                  class="rounded-md border-gray-300 mt-1 text-base w-full py-2 pr-10 pl-3 block focus:outline-none sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option>Sustain</option>
                  <option>Evolve</option>
                  <option>Transform</option>
                </select>
              </div>
              <div class="space-y-2 mt-2 text-sm text-gray-500">
                <!-- was a p -->
                <p>
                  This field is mandatory. It documents why this particular change is required. Only one reason can be selected for the RFC. "The
                  following definitions for "PURPOSE" apply:
                </p>
                <p>
                  SUSTAIN: The maintenance of the current level of IM/IT services from end-to-end includes:. Involves no new architecture. Provides
                  continuity, Maintenance and Minor Enhancements to maintain existing IM/IT services. Sustains IM/IT service of an existing capability
                  by addressing aging components or deficiencies that limit its ongoing use. Requires negligible new capability or functionality
                  added. Production status services and ongoing operational activities to support core Departmental programs and keep the lights on.
                  Day-to-day client service commitments through multiple service channels. Supports program and corporate services operations.
                  Critical changes to the sustain environment.
                </p>
                <p>
                  EVOLVE: Includes major enhancements to the existing IM/IT services in order to maintain and/or advance the existing capability
                  within the sustainment program: Driven by a business need to deliver an additional capability or to position an existing asset for
                  anticipated needs by adding capability. Scope may involve multiple systems, programs, or organizational entities (functional and/or
                  operational authorities) but with clear delineation among functional and/or operational authorities as established through
                  governance mechanisms.
                </p>
                <p>
                  TRANSFORM: Includes new IM/IT Services & Capabilities: Vote 5 projects. Partner Program Transformation. TBS CIOB Strategic Projects
                  – Enterprise-wide files. GC IT Enterprise Services ( SSC's initiatives i.e. ETI, Data Center, etc.). New IT Strategy resulting from
                  major policy/legislative change. Major Modifications or additions to established program activities".
                </p>
              </div>
            </div>

            <div class="sm:col-span-6">
              <label for="description" class="font-medium text-sm text-gray-700 block"> Description </label>
              <div class="mt-1">
                <textarea
                  id="description"
                  :ref="description.ref"
                  v-model="description.value"
                  name="description"
                  :rows="3"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                This IM CCB mandatory field is used to provide a clear, detailed, but concise description of the proposed change. References to other
                RFCs may be used if applicable
              </p>
            </div>

            <div class="sm:col-span-6">
              <label for="businessCase" class="font-medium text-sm text-gray-700 block"> Business Case </label>
              <div class="mt-1">
                <textarea
                  id="businessCase"
                  :ref="businessCase.ref"
                  v-model="businessCase.value"
                  name="businessCase"
                  :rows="3"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                This IM CCB mandatory field is used to provide a description of the business justification (need) of the change. If a formal business
                case has been prepared, attach it to the File Attachments section below, and include a phrase referring to it. An approved business
                plan is required to ensure the availability of necessary resources and funding to effect the proposed change.
              </p>
            </div>

            <div class="sm:col-span-6">
              <label for="securityImplications" class="font-medium text-sm text-gray-700 block"> Security Implications </label>
              <div class="mt-1">
                <input
                  id="securityImplications"
                  :ref="securityImplications.ref"
                  v-model="securityImplications.value"
                  name="securityImplications"
                  type="text"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                If a valid Certification and Accreditation (C&A) or Interim Approval to Proceed (IAP) exists, attach them or provide the appropriate
                reference to them. If not, attach the Concept of Operations (CONOPS), Statement of Sensitivity (SoS) and sufficient information so the
                ISSO can properly assess the security implication of the change. Please contact your ISSO for more information to assist you with the
                completion of these deliverables (http://admim-smagi.mil.ca/en/security/policies-standards/process-dim-secur.page) which may or may
                not be required if previously submitted.
              </p>
            </div>

            <div class="sm:col-span-6">
              <label for="parentSystem" class="font-medium text-sm text-gray-700 block"> Parent System </label>
              <div class="mt-1">
                <textarea
                  id="parentSystem"
                  :ref="parentSystem.ref"
                  v-model="parentSystem.value"
                  name="parentSystem"
                  :rows="3"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Identify the primary Parent System, and any of its related Configuration Items (CIs), that are/may be impacted by the proposed change.
                For instance, a change in application software may require a need to upgrade the Foundation Software that in turn may impact the
                Server processing or disk storage capacity. Identify any changes to interface requirements. For instance, a change in one application
                that may impact the way or the type of information that is exchanged to another application
              </p>
            </div>

            <div class="sm:col-span-6">
              <label for="affectedInfrastructure" class="font-medium text-sm text-gray-700 block"> Affected Infrastructure </label>
              <div class="mt-1">
                <textarea
                  id="affectedInfrastructure"
                  :ref="affectedInfrastructure.ref"
                  v-model="affectedInfrastructure.value"
                  name="affectedInfrastructure"
                  :rows="3"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                This IM CCB mandatory field is used to identify the affected infrastructure (hardware or facilities) that may be impacted by the
                proposed change.
              </p>
            </div>

            <div class="sm:col-span-6">
              <label for="affectedInformationSystem" class="font-medium text-sm text-gray-700 block"> Affected Information Systems </label>
              <div class="mt-1">
                <textarea
                  id="affectedInformationSystem"
                  :ref="affectedInformationSystem.ref"
                  v-model="affectedInformationSystem.value"
                  name="affectedInformationSystem"
                  :rows="3"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                This IM CCB mandatory field is used to further identify affected information systems such as Common Email or other applications that
                may be impacted by the proposed change in addition to the Affected Infrastructure.
              </p>
            </div>

            <div class="sm:col-span-6">
              <label for="affectedConfigurationItems" class="font-medium text-sm text-gray-700 block"> Affected Configuration Items </label>
              <div class="mt-1">
                <textarea
                  id="affectedConfigurationItems"
                  :ref="affectedConfigurationItems.ref"
                  v-model="affectedConfigurationItems.value"
                  name="affectedConfigurationItems"
                  :rows="3"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
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
            </div>

            <div class="sm:col-span-6">
              <label for="conceptOfOperation" class="font-medium text-sm text-gray-700 block"> Concept of Operation </label>
              <div class="mt-1">
                <textarea
                  id="conceptOfOperation"
                  :ref="conceptOfOperation.ref"
                  v-model="conceptOfOperation.value"
                  name="conceptOfOperation"
                  :rows="3"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                This IM CCB mandatory field is used to enter the information directly in the space provided or upload your CONOPS document to the RFC.
                If the latter is the best option, indicate this in the space provided. This document provides basic information regarding the
                operation of the system and often forms the basis for security recommendations. The CONOPS must include, at a minimum: a description
                of the system, including any external connections; data sensitivity information and access limitations; the user communities for
                specific applications and equipment; personnel or positions and their proposed duties or responsibilities for operations,
                administration, security and maintenance; and anticipated modification/expansion of the system.
              </p>
            </div>

            <div class="sm:col-span-6">
              <label for="conceptOfTesting" class="font-medium text-sm text-gray-700 block"> Concept of Testing </label>
              <div class="mt-1">
                <textarea
                  id="conceptOfTesting"
                  :ref="conceptOfTesting.ref"
                  v-model="conceptOfTesting.value"
                  name="conceptOfTesting"
                  :rows="3"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                This IM CCB mandatory field is used to demonstrate to the appropriate approval authority that necessary testing has been successfully
                conducted and completed. Testing must be performed to ensure compatibility, interoperability and functionality of the Configuration
                Item. Testing documentation (plan and/or results), it should be uploaded/attached to the RFC for review.
              </p>
            </div>

            <div class="sm:col-span-6">
              <label for="conceptOfImplementation" class="font-medium text-sm text-gray-700 block"> Concept of Implementation </label>
              <div class="mt-1">
                <textarea
                  id="conceptOfImplementation"
                  :ref="conceptOfImplementation.ref"
                  v-model="conceptOfImplementation.value"
                  name="conceptOfImplementation"
                  :rows="3"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                This IM CCB mandatory field is used to provide implementation information which allows the service provider/implementer to review and
                understand the method of implementing the planned change. This can include scheduling, time, date and location of the change to occur,
                affected parties/users etc. If available, an Implementation plan should be attached to the RFC and referenced in this field.
              </p>
            </div>

            <div class="sm:col-span-6">
              <label for="backoutPlan" class="font-medium text-sm text-gray-700 block"> Backout Plan </label>
              <div class="mt-1">
                <textarea
                  id="backoutPlan"
                  :ref="backoutPlan.ref"
                  v-model="backoutPlan.value"
                  name="backoutPlan"
                  :rows="3"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">Description of activities required should the implementation of the requested change fail.</p>
            </div>

            <div class="sm:col-span-3">
              <label for="number" class="font-medium text-sm text-gray-700 block"> RFC Number </label>
              <div class="mt-1">
                <input
                  id="rfcNumber"
                  :ref="rfcNumber.ref"
                  v-model="rfcNumber.value"
                  name="rfcNumber"
                  type="text"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="impactAssessmentDueDate" class="font-medium text-sm text-gray-700 block"> Impact Assessment Due Date </label>
              <div class="mt-1">
                <input
                  id="impactAssessmentDueDate"
                  :ref="impactAssessmentDueDate.ref"
                  v-model="impactAssessmentDueDate.value"
                  name="impactAssessmentDueDate"
                  type="text"
                  class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <button
            v-if="props.rfc != null"
            type="button"
            class="border border-transparent rounded-md font-medium bg-red-600 shadow-sm text-sm text-white mr-3 py-2 px-4 inline-flex justify-center focus:outline-none hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            @click="onDelete()"
          >
            Delete
          </button>
          <div class="flex-1"></div>
          <button
            type="button"
            class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm py-2 px-4 text-gray-700 focus:outline-none hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="$router.back()"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="border border-transparent rounded-md font-medium bg-indigo-600 shadow-sm text-sm text-white ml-3 py-2 px-4 inline-flex justify-center focus:outline-none hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
