import { createContext, useContext, useMemo, useState } from 'react';

interface User {
  id: number;
  name: string;
}

// interface UserContextValue {
//   user: User | null;
//   setUser: (user: User) => void;
// }

const UserContext = createContext<{ user: User | null } | null>(null);
const SetUserContext = createContext<((user: User) => void) | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const userValue = useMemo(() => ({ user }), [user]);

  return (
    <UserContext.Provider value={userValue}>
      <SetUserContext.Provider value={setUser}>
        {children}
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within a UserProvider');

  return ctx;
};

export const useSetUserContext = () => {
  const ctx = useContext(SetUserContext);
  if (!ctx) throw new Error('useSetUser must be used within a UserProvider');

  return { setUser: ctx };
};
