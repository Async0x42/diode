import { useRouter } from 'vue-router';
import { useAxios } from '@vueuse/integrations';
import { useForm } from 'vue-hooks-form';

export const useFormActions = <T extends { id: number }>(apiPath: string, nextRouteName: string, dataObject?: T) => {
  const router = useRouter();

  const { useField, handleSubmit } = dataObject
    ? useForm<T>({
        defaultValues: dataObject,
        validateMode: 'focusout',
      })
    : useForm<T>({
        validateMode: 'focusout',
      });

  // TODO: remove async and display loading information and errors
  const onSubmit = handleSubmit(async (formData) => {
    if (dataObject == null) {
      // create
      const { data, isFinished } = await useAxios(apiPath, { method: 'POST', data: formData });
      router.push({ name: nextRouteName });
    } else {
      // update
      const { data, isFinished } = await useAxios(`${apiPath}/${dataObject.id}`, { method: 'PUT', data: formData });
      router.push({ name: nextRouteName });
    }

    // on success, display checkmark transition and then redirect to the new/edited application
  });

  const onDelete = async () => {
    if (dataObject != null) {
      const { data, isFinished } = await useAxios(`${apiPath}/${dataObject.id}`, { method: 'DELETE' });
      router.push({ name: nextRouteName });
    }
  };

  return { onSubmit, onDelete, useField, handleSubmit };
};
