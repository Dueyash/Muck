import { getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function LandingPage() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null;
  if (isAuthenticated) return <Navigate to="/home" replace />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-2 bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
          Welcome to Muck
        </h1>
        <div className="w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 my-2" />
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto">
          Collaborate on documents in real-time
        </p>
        <Button
          size="lg"
          onClick={() => (window.location.href = getLoginUrl())}
          className="px-8"
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
