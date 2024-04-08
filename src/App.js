import React, { useReducer, useState } from "react";
import UserBar from "./User/UserBar";
import List from "./Post/List";
import Create from "./Post/Create";
import appReducer from "./Reducers";
import Header from "./Header";
import { ThemeContext } from "./Context/ThemeContext";
import ChangeTheme from "./Theme";
import { StateContext } from "./Context/StateContext";

function App() {
  const initialTheme = {
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  }

  const initialState = {
    user: { 
      name: '',
      password: ''
    },
    posts: []
  };

  const [state, dispatch] = useReducer(appReducer, initialState);
  const { user, posts } = state;
  const [theme, setTheme] = useState(initialTheme)

  return (
    <React.Fragment>
      <StateContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={theme}>
          <div style={{padding: '8px'}}>
            <Header />
            <ChangeTheme theme={theme} setTheme={setTheme} />
            <UserBar />
            <hr />
            {
              posts.length > 0 ? <List posts={posts} /> : <b>No posts yet</b>
            }
            <hr />
            {
              user.name ? <Create /> : <b>Please register</b>
            }
          </div>
        </ThemeContext.Provider>
      </StateContext.Provider>
    </React.Fragment>
  );
}

export default App;
