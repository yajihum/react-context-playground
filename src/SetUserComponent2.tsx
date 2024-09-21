import { useSetUserContext } from './UserProvider';

export function SetUserComponent2() {
  const { setUser } = useSetUserContext();
  console.log('setUser 2');

  const handleClick = () => {
    setUser({ id: 2, name: 'Jane Smith' });
  };

  return (
    <section>
      <h2>SetUser Component 2</h2>

      <button onClick={handleClick}>ユーザーを追加</button>
    </section>
  );
}
