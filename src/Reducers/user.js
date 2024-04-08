export default function User (state, action) {
    switch(action.type) {
        case 'REGISTER':
            return {
                ...action.payload
            }
        case 'LOGOUT':
            return {
                ...action.payload
            }
        default:
            return state;
    }
}