import { useUserContext } from './UserProvider';

export function UserComponent() {
  const { user } = useUserContext();
  console.log('user', user);

  return (
    <section>
      <h2>User Component</h2>

      <p>user: {user?.name ?? 'null'}</p>
    </section>
  );
}
