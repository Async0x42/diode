import type { Ref } from 'vue';
import { isObject } from 'lodash-es';

export const assignDefaultsToForm = (formModel: Ref<{ [key: string]: any }>, dbObject: any) => {
  if (!dbObject) return;

  if (dbObject != null) {
    Object.keys(formModel.value).forEach((key) => {
      const value = dbObject[key];

      if (Array.isArray(value) && value.length > 0 && isObject(value)) {
        formModel.value[key] = value.map((v) => v.id);
      } else {
        formModel.value[key] = dbObject[key];
      }
    });
  }
};

export const createFormModel = <T>(fields: (keyof T)[]) => {
  const result = ref<Partial<T>>({});
  fields.forEach((f) => (result.value[f] = null));
  return result;
};
