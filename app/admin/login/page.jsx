'use client';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { useRouter } from 'next/navigation';
import { styles } from '@/styles';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/admin');
        } catch (err) {
            setError('Failed to login. Please check your credentials.');
            console.error(err);
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-primary'>
            <div className='bg-black-100 p-8 rounded-2xl w-full max-w-md border border-gray-800 shadow-card'>
                <h2 className={`${styles.sectionHeadText} text-center mb-6`}>Admin Login</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleLogin} className='flex flex-col gap-4'>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Email</span>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                            placeholder='admin@example.com'
                            required
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Password</span>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                            placeholder='********'
                            required
                        />
                    </label>
                    <button
                        type='submit'
                        className='bg-violet-600 py-3 px-8 outline-none w-full text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-violet-700 transition-colors'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
