import { Configuration, Connection, IDatabaseDriver, Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { MariaDbDriver } from '@mikro-orm/mariadb';

const config: Configuration<IDatabaseDriver<Connection>> | Options<IDatabaseDriver<Connection>> = {
  metadataProvider: TsMorphMetadataProvider,
  highlighter: new SqlHighlighter(),
  entities: ['./**/entities/**/*.entity.js'], // TS entities (source), relative to `baseDir`
  entitiesTs: ['./**/entities/**/*.entity.ts'], // TS entities (source), relative to `baseDir`
  driver: MariaDbDriver,
  type: 'mariadb',
};

export default config;
