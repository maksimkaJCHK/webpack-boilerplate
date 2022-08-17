import { call, put, takeEvery, takeLatest, select, all } from 'redux-saga/effects';
import { LOAD_DOG } from 'const/const';
import getDog from 'api/getDog';
import { addDog } from 'actions/actions';

function* initialSaga() {
  console.log('Приложение загружено');
}

function* loadDog() {
  let dogParam = yield call(getDog);
  yield put(addDog(dogParam));

}

function* watchLoadDog() {
  yield takeLatest(LOAD_DOG, loadDog);
}

function* rootSaga() {
  yield all([
    initialSaga(),
    watchLoadDog()
  ]);
}

export default rootSaga;