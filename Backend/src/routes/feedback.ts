import { Router } from 'express';
import { FeedbackController } from '../controllers/FeedbackController';

export const FeedbackRoutes = Router();
const feedbackController = new FeedbackController();

FeedbackRoutes.post('/', feedbackController.create);
