import { useAuth } from "~/contexts/AuthContext";

export default function Header() {
  const { signInWithGoogle, signOut, currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div className="max-w-3xl mx-auto p-5 flex justify-between items-center">
      {currentUser ? (
        <div>
          <img
            src={currentUser.photoURL}
            alt="User"
            className="border rounded-full h-10"
          />
          <div onClick={signOut}>Logout</div>
        </div>
      ) : (
        <div onClick={signInWithGoogle}>Login</div>
      )}
    </div>
  );
}