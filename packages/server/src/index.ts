import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotEnvExtended from 'dotenv-extended';
import { calendarRouter } from './calendar/calendar.router';
import { rfcRouter } from './rfc/rfc.router';
import { brdRouter } from './brd/brd.router';
import { contactRouter } from './contact/contact.router';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/not-found.middleware';
import { initialize } from './database';

dotEnvExtended.load();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

initialize(true, true);

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api/calendar', calendarRouter);
app.use('/api/rfcs', rfcRouter);
app.use('/api/brds', brdRouter);
app.use('/api/contacts', contactRouter);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
