import { Router } from 'express';
import * as PageController from '../controllers/pageController'
import * as SearChcontroller from '../controllers/serchController'

const router = Router();

router.get('/', PageController.home );
router.get('/cats', PageController.cats );
router.get('/dogs', PageController.dogs );
router.get('/fishes', PageController.fishes );

router.get('/search', SearChcontroller.search)

export default router;