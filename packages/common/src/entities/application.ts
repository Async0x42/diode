import { IBrd } from './brd';
import { IFqdn } from './fqdn';
import { IServer } from './server';

export interface IApplication {
  id: number;
  name: string;
  shortName?: string;
  description?: string;
  fqdns?: IFqdn[];
  servers?: IServer[];
  brds?: IBrd[];
}
