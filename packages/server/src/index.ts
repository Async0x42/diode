/**
 * Required External Modules
 */

import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { calendarRouter } from './calendar/calendar.router';
import { rfcRouter } from './rfc/rfc.router';
import { brdRouter } from './brd/brd.router';
import { contactRouter } from './contact/contact.router';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/not-found.middleware';
import { userRouter } from './auth/user.router';
import { tokenGuard } from './middleware/token-guard';

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/', userRouter);

// Unprotected Get
app.use(tokenGuard());

// Protected Get
app.use('/api/calendar', calendarRouter);
app.use('/api/rfcs', rfcRouter);
app.use('/api/brds', brdRouter);
app.use('/api/contacts', contactRouter);
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
