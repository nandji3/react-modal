import { all, fork } from 'redux-saga/effects'
// import postSaga from './features/posts/postSaga'
import authSaga from '../feature/auth/authSaga';

function* rootSaga() {
    yield all([
        fork(authSaga),
        // fork(userSaga),
        // fork(postSaga),
    ]);
}

export default rootSaga;

// Why fork(postSaga) instead of postSaga()?
// postSaga() immediately runs the generator and waits (blocking).

// fork(postSaga) starts it in the background, allowing others to run concurrently.