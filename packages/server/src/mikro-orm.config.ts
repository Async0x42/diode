import { Configuration, Connection, IDatabaseDriver, Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const config: Configuration<IDatabaseDriver<Connection>> | Options<IDatabaseDriver<Connection>> = {
  metadataProvider: TsMorphMetadataProvider,
  highlighter: new SqlHighlighter(),
  entities: ['./dist/entities/**/*.js'], // TS entities (source), relative to `baseDir`
  entitiesTs: ['./src/entities/**/*.ts'], // TS entities (source), relative to `baseDir`
  dbName: 'diode.db',
  type: 'sqlite', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
  forceUtcTimezone: true,
  forceUndefined: true,
  debug: true,
};

export default config;
