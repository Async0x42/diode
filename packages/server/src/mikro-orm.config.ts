import { Configuration, Connection, IDatabaseDriver, Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';

const config: Configuration<IDatabaseDriver<Connection>> | Options<IDatabaseDriver<Connection>> = {
  metadataProvider: TsMorphMetadataProvider,
  highlighter: new MongoHighlighter(),
  entities: ['./**/entities/**/*.entity.js'], // TS entities (source), relative to `baseDir`
  entitiesTs: ['./**/entities/**/*.entity.ts'], // TS entities (source), relative to `baseDir`
  type: 'mongo',
};

export default config;
