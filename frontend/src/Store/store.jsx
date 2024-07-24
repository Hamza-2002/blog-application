import { configureStore , combineReducers } from '@reduxjs/toolkit'
import loginSlice from './CreateReducres/LoginSlice'
import BlogSlice from './CreateReducres/BlogSlice'

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import GetAllUserSlice from './CreateReducres/GetAllUserSlice';
import UserBlogsSlice from './CreateReducres/UserBlogsSlice';
import CommentSlice from './CreateReducres/CommentSlice';
import GetAllCommentSlice from './CreateReducres/GetAllCommentSlice';

 const rootReducer = combineReducers({
      loginuser:loginSlice,
      blogs : BlogSlice,
      Allusers : GetAllUserSlice,
      loginuserblogs: UserBlogsSlice,
      comments : CommentSlice,
      getallcomments: GetAllCommentSlice
     
    })
 

  const persistConfig = {
    key: 'root',
    storage  ,
    blacklist:["Allusers" ],
    whitelist:['loginuser' ]
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer:persistedReducer
});
export const persistor = persistStore(store);