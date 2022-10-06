import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { User } from '@firebase/auth-types';

const AuthContext = React.createContext(null);

type Props = { children: any }

export const useAuth: any = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: Props) => {
  
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsuscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signUp = async (email: string, password: string) => {
    try{
      return auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('email already in use')
    }
  };

  const logIn = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    return auth.signOut();
  };

  const resetPassword = (email: string) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateEmail = (email: string) => {
    return currentUser!.updateEmail(email);
  };

  const updatePassword = (password: string) => {
    return currentUser!.updatePassword(password);
  };

  const deleteUser = () => {
    return currentUser!.delete();
  };

  const value: any = {
    currentUser,
    signUp,
    logIn,
    logOut,
    resetPassword,
    updateEmail,
    updatePassword,
    deleteUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
