// eslint-disable-next-line import/no-unresolved
import { handleRequest } from "src/utils/resquest";

const UsersService = {
  getAll: () => handleRequest('get', 'users'),
};

export default UsersService;