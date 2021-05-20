import { Configuration, Connection, IDatabaseDriver, Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const config: Configuration<IDatabaseDriver<Connection>> | Options<IDatabaseDriver<Connection>> = {
  metadataProvider: TsMorphMetadataProvider,
  highlighter: new SqlHighlighter(),
  entities: ['./**/entities/**/*.js'], // TS entities (source), relative to `baseDir`
  entitiesTs: ['./**/entities/**/*.ts'], // TS entities (source), relative to `baseDir`
  dbName: process.env.DB_NAME || 'diode.db',
  type: (process.env.DB_TYPE as keyof typeof Configuration.PLATFORMS) || 'sqlite',
  forceUtcTimezone: true,
  forceUndefined: true,
  debug: true,
};

export default config;
