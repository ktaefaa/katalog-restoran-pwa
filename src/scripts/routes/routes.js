import Detail from '../views/pages/detail';
import listRestaurant from '../views/pages/list';

const routes = {
  '/': listRestaurant,
  '/detail/:id': Detail,
};

export default routes;
