import { useRouter } from 'vue-router';
import { useAxios } from '@vueuse/integrations';

export const useFormActions = <T extends { id: number }>(apiPath: string, nextRouteName: string, dataObject?: T) => {
  const router = useRouter();

  // TODO: remove async and display loading information and errors
  const onSubmit = async (formData: Partial<T>) => {
    if (dataObject == null) {
      // create
      const { data, isFinished } = await useAxios(apiPath, { method: 'POST', data: formData });
      router.push({ name: nextRouteName });
    } else {
      // update
      const { data, isFinished } = await useAxios(`${apiPath}/${dataObject.id}`, { method: 'PUT', data: formData });
      router.push({ name: nextRouteName });
    }
  };

  const onDelete = async () => {
    if (dataObject != null) {
      const { data, isFinished } = await useAxios(`${apiPath}/${dataObject.id}`, { method: 'DELETE' });
      router.push({ name: nextRouteName });
    }
  };

  return { onSubmit, onDelete };
};
