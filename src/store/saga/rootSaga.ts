import { call, put, takeEvery, takeLatest, select, all } from 'redux-saga/effects';
import actions from '../const/const';
import getDog from '../../api/getDog';
import { addDog } from '../actions/actions';

function* initialSag(): any {
  console.log('Приложение загружено');
}

function* loadDog(): any {
  let dogParam = yield call(getDog);
  yield put(addDog(dogParam));
}

function* watchLoadDog(): any {
  yield takeLatest(actions.LOAD_DOG, loadDog);
}

function* rootSaga(): any {
  yield all([
    initialSag(),
    watchLoadDog()
  ]);
}

export default rootSaga;