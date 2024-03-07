import { SimpleBaseEntity } from '../base/base.model';

export class ServiceDto extends SimpleBaseEntity<String> {
  name?: string;
  description?: string;
  version?: string;
  endpoint?: string;
  status?: Boolean;
  configuration?: string;
  pricing?: string;
}
