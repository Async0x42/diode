import { Configuration, ProviderScope, ProviderType, Inject } from '@tsed/di';
import { PlatformApplication } from '@tsed/common';
import { MikroOrmModule } from '@tsed/mikro-orm';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import path from 'path';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const rootDir = __dirname;
const clientDir = path.join(rootDir, '../../client/dist');

@Configuration({
  imports: [MikroOrmModule],
  rootDir,
  acceptMimes: ['application/json'],
  httpPort: process.env.PORT || 7777,
  httpsPort: false,
  logger: {
    debug: true,
    logRequest: true,
    requestFields: ['reqId', 'method', 'url', 'headers', 'query', 'params', 'duration'],
  },
  mount: {
    '/api': '${rootDir}/controllers/**/*.ts',
  },
  middlewares: [
    { hook: '$afterInit', use: helmet({ contentSecurityPolicy: false }) },
    // { env: Env.PROD, use: EnsureHttpsMiddleware },
    cors(),
    cookieParser(),
    compress({}),
    methodOverride(),
    bodyParser.json(),
    bodyParser.urlencoded({
      extended: true,
    }),
  ],
  statics: {
    '/': clientDir,
  },
  mikroOrm: [
    {
      contextName: 'default',
      type: 'mariadb',
      entities: [`${__dirname}/entities/*{.ts,.js}`],
      metadataProvider: TsMorphMetadataProvider,
      highlighter: new SqlHighlighter(),
    },
  ],
})
export class Server {
  @Inject()
  app!: PlatformApplication;

  @Configuration()
  settings!: Configuration;

  /**
   * This method let you configure the express middleware required by your application to works.
   * @returns {Server}
   */
  public $beforeRoutesInit(): void | Promise<any> {
    console.log('beforeRoutesInit');
    // Add middlewares here only when all of your legacy routes are migrated to Ts.ED
    // this.app
    //   .use(cookieParser())
    //   .use(compress({}))
    //   .use(methodOverride())
    //   .use(bodyParser.json())
    //   .use(bodyParser.urlencoded({
    //     extended: true
    //   }));
  }
}
