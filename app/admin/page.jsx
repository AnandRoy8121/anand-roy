'use client';
import AdminGuard from '@/components/AdminGuard';
import { styles } from '@/styles';
import { auth } from '@/utils/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function AdminDashboard() {
    const router = useRouter();

    const handleLogout = async () => {
        await signOut(auth);
        router.push('/admin/login');
    };

    const sections = [
        {
            title: 'Projects',
            description: 'Manage your portfolio projects',
            icon: <DashboardIcon sx={{ fontSize: 40 }} />,
            link: '/admin/projects',
            color: 'bg-blue-500'
        },
        {
            title: 'Experience',
            description: 'Update work experience & timeline',
            icon: <WorkIcon sx={{ fontSize: 40 }} />,
            link: '/admin/experience',
            color: 'bg-green-500'
        },
        {
            title: 'Skills',
            description: 'Manage technologies & tools',
            icon: <CodeIcon sx={{ fontSize: 40 }} />,
            link: '/admin/skills',
            color: 'bg-purple-500'
        }
    ];

    return (
        <AdminGuard>
            <div className="min-h-screen bg-primary p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-10">
                        <h1 className={`${styles.sectionHeadText}`}>Dashboard</h1>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition"
                        >
                            Logout
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sections.map((section) => (
                            <div
                                key={section.title}
                                onClick={() => router.push(section.link)}
                                className="bg-black-100 p-6 rounded-2xl cursor-pointer hover:bg-gray-800 transition transform hover:-translate-y-1 border border-gray-800"
                            >
                                <div className={`${section.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                                    {section.icon}
                                </div>
                                <h3 className="text-white text-2xl font-bold mb-2">{section.title}</h3>
                                <p className="text-secondary">{section.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AdminGuard>
    );
}
