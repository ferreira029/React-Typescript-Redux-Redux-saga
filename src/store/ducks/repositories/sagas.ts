import { call, put } from 'redux-saga/effects';
import api from './../../../services/api';
import { laodSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'users/ferreira029/repos');

    yield put(laodSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}

