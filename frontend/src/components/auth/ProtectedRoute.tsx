import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

/**
 * ログインが必要なルートのレイアウトルート。
 * 子ルートは <Outlet /> に描画される。
 */
function ProtectedRoute() {
  const { user, isCheckingAuth, authError } = useAuth();
  const location = useLocation();

  if (isCheckingAuth) {
    return <p>確認中...</p>;
  }

  if (authError) {
    return <p>認証状態が確認できませんでした。</p>;
  }

  if (user === null) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
