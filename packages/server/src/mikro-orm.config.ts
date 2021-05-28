import { Configuration, Connection, IDatabaseDriver, Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { MySqlDriver } from '@mikro-orm/mysql';

const config: Configuration<IDatabaseDriver<Connection>> | Options<IDatabaseDriver<Connection>> = {
  metadataProvider: TsMorphMetadataProvider,
  highlighter: new SqlHighlighter(),
  entities: ['./**/entities/**/*.entity.js'], // TS entities (source), relative to `baseDir`
  entitiesTs: ['./**/entities/**/*.entity.ts'], // TS entities (source), relative to `baseDir`
  driver: MySqlDriver,
  type: 'mysql',
};

export default config;
