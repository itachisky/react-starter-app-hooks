import Posts from "./posts";
import User from "./user";

export default function appReducer (state, action) {
    return {
        user: User(state.user, action),
        posts: Posts(state.posts, action)
    }
}