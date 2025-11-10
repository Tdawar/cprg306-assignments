"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      console.error(err);
    }
  };

  const goToShoppingList = () => {
    router.push("/week-9/shopping-list");
  };

  return (
    <main className="p-20 flex flex-col items-center text-center bg-gradient-to-t from-gray-600 to-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-10">Week 9 - Authentication Demo</h1>

      {!user ? (
        <div className="flex flex-col items-center gap-6">
          <p>Please sign in to continue...</p>
          <button
            onClick={handleLogin}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Sign in with GitHub
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <p>
            Welcome, <strong>{user.displayName}</strong> ({user.email})
          </p>

          <button
            onClick={goToShoppingList}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded"
          >
            Go to Shopping List
          </button>

          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded"
          >
            Log Out
          </button>
        </div>
      )}

      <p className="italic mt-20">Made By - Tushar Dawar</p>
    </main>
  );
}
