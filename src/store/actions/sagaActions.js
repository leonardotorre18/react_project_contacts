export const sagaActionsTypes = {
  CALL_REQUEST: 'CALL_REQUEST',
  CALL_SUCCESS: 'CALL_SUCCESS',
  CALL_FAILED: 'CALL_FAILED'
}

export const sagaActions = {

  login: ( email, password )=> {
    return {
      type: sagaActionsTypes.CALL_REQUEST,
      payload: {
        request: {
          method: 'post',
          url: 'https://reqres.in/api/login',
          data: {
            email: email,
            password: password
          }
        },
        success: sagaActionsTypes.CALL_SUCCESS,
        failed: sagaActionsTypes.CALL_FAILED
      }
    }
  }

}