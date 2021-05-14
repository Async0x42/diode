import { user } from '~/logic';

export default function authHeader() {
  if (user && user.value.token) {
    return { authorization: `Bearer ${user.value.token}` };
  } else {
    return {};
  }
}
