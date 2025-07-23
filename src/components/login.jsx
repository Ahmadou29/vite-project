
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      navigate('/admin');
    } catch  {
      alert("Erreur de connexion");
    }
  };

  return (
    <div>
    <form onSubmit={handleLogin} className="bg-primary flex-column">
      <h2>Connexion</h2>
      <div>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Mot de passe" value={pass} onChange={e => setPass(e.target.value)} />
      </div>
      <button type="submit" className='justify--center'>Se connecter</button>
    </form>
    </div>
  );
}
