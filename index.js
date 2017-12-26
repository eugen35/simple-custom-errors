import * as operationsTypes from './constants/OperationsTypes';
import * as jsonMemoryDb from './connectors/jsonMemoryDb/index';
import {createStorage} from "./src/core";

module.exports = {
  operationsTypes,
  jsonMemoryDb,
  createStorage
};
