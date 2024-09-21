import { useSetUserContext } from './UserProvider';

export function SetUserComponent1() {
  const { setUser } = useSetUserContext();
  console.log('setUser 1');

  const handleClick = () => {
    setUser({ id: 1, name: 'John Doe' });
  };

  return (
    <section>
      <h2>SetUser Component 1</h2>

      <button onClick={handleClick}>ユーザーを追加</button>
    </section>
  );
}
