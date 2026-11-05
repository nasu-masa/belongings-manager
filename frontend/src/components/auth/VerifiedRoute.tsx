import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

/**
 * メール認証済みユーザーのみ通すレイアウトルート。
 * ProtectedRoute の子として使う前提（ログイン確認は親で済んでいる）。
 */
function VerifiedRoute() {
  const { user } = useAuth();

  if (user === null) {
    return <Navigate to="/login" replace />;
  }

  if (user.email_verified_at === null) {
    return <Navigate to="/verify-email" replace />;
  }

  return <Outlet />;
}

export default VerifiedRoute;
