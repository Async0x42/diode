import { user } from '~/logic';

export default function authHeader() {
  if (user && user.value.accessToken) {
    return { Authorization: `Bearer ${user.value.accessToken}` };
  } else {
    return {};
  }
}
