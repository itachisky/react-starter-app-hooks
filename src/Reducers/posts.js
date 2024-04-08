export default function Posts (state, action) {
    switch(action.type) {
        case 'CREATE':
            return [ ...state, { ...action.payload }]
        default:
            return state;
    }
}