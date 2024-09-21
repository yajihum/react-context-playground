import { UserProvider } from './UserProvider';
import { UserComponent } from './UserComponent';
import { SetUserComponent1 } from './SetUserComponent1';
import { SetUserComponent2 } from './SetUserComponent2';

function App() {
  return (
    <UserProvider>
      <UserComponent />
      <SetUserComponent1 />
      <SetUserComponent2 />
    </UserProvider>
  );
}

export default App;
