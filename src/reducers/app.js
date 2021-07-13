export default function (state = {
  user: '',
  loggedIn: false,
  isOpen: false,
  menuOpen: false,
  loading: false,
  error: '',
  errorMsg: ''
}, action) {
  switch (action.type) {
    case 'CHANGE_USER_STATUS':
      return { ...state, user: action.payload }
    case 'CHANGE_LOGIN_STATUS':
      return { ...state, loggedIn: action.payload }
    case 'CHANGE_LOGINFORM_STATUS':
      return { ...state, isOpen: action.payload }
    case 'CHANGE_USERMENU_STATUS':
      return { ...state, menuOpen: action.payload }
    case 'CHANGE_LOADING_STATUS':
      return { ...state, loading: action.payload }
    case 'CHANGE_ERROR_STATUS':
      return { ...state, error: action.payload }
    case 'CHANGE_ERROR_MESSAGE':
      return { ...state, errorMsg: action.payload }
    default:
      return state
  }
}
