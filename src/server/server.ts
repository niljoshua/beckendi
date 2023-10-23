import 'dotenv/config';
import { startDatabase } from '../database/database';
import app from '../app';

const PORT: number = Number(process.env.PORT) || 3001;

const startServer = async () => {
  try {
    await startDatabase();
    app.listen(PORT, (): void => {
      console.log(`Application is running on: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the database:', error);
  }
};

startServer();
