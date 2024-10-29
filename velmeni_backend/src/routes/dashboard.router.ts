import express, { Router } from 'express';
import * as dashboardController from '../controllers/dashboard.controller';

import { validateRequest } from '../common';

const router: Router = express.Router();
/**
 * @swagger
 * /api/v1/dashboard:
 *   get:
 *     summary: Get dashboard data
 *     description: Get dashboard data
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */


router
    .route('/dashboard/report')
    .get(dashboardController.report);

export { router as dashboardRouter };