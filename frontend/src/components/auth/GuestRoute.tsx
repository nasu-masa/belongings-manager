import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

/**
 * 未ログインユーザー専用ルートのレイアウトルート。
 * ログイン済みの場合はメール認証状態に応じてリダイレクトする。
 */
function GuestRoute() {
  const { user, isCheckingAuth, authError } = useAuth();

  if (isCheckingAuth) {
    return <p>確認中...</p>;
  }

  if (authError) {
    return <p>認証状態が確認できませんでした。</p>;
  }

  if (user === null) {
    return <Outlet />;
  }

  return (
    <Navigate to={user.email_verified_at ? '/' : '/verify-email'} replace />
  );
}

export default GuestRoute;
