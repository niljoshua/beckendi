import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { client } from '../database/database';

const logics = async (req: Request, res: Response): Promise<Response> => {
    const queryResult: QueryResult = await client.query(`SELECT * FROM "trabalhoextensionista";`);

    return res.status(200).json(queryResult.rows);
}

export default logics;  // Export the function directly, not as an object
