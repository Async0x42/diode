import { user } from '~/logic';

export default function authHeader() {
  if (user && user.value.accessToken) {
    return { authorization: `Bearer ${user.value.accessToken}` };
  } else {
    return {};
  }
}
