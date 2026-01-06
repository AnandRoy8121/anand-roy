'use client';
import { useState, useEffect } from 'react';
import AdminGuard from '@/components/AdminGuard';
import { styles } from '@/styles';
import { db } from '@/utils/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { uploadToCloudinary } from '@/utils/cloudinary';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function ProjectsAdmin() {
    const router = useRouter();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // Form State
    const [name, setName] = useState('');
    const [github, setGithub] = useState('');
    const [liveUrl, setLiveUrl] = useState('');
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, 'projects'));
            const projectsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProjects(projectsData);
        } catch (error) {
            console.error("Error fetching projects: ", error);
            alert("Failed to fetch projects");
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !image) {
            alert("Name and Image are required");
            return;
        }

        setUploading(true);
        try {
            // 1. Upload Image to Cloudinary
            const imageUrl = await uploadToCloudinary(image);
            if (!imageUrl) throw new Error("Image upload failed");

            // 2. Add to Firestore
            await addDoc(collection(db, 'projects'), {
                name,
                github,
                liveUrl,
                img: imageUrl,
                createdAt: new Date()
            });

            alert("Project added successfully!");
            // Reset form
            setName('');
            setGithub('');
            setLiveUrl('');
            setImage(null);
            fetchProjects(); // Refresh list
        } catch (error) {
            console.error("Error adding project: ", error);
            alert("Error adding project");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this project?")) return;
        try {
            await deleteDoc(doc(db, 'projects', id));
            fetchProjects();
        } catch (error) {
            console.error("Error deleting project: ", error);
            alert("Failed to delete project");
        }
    };

    return (
        <AdminGuard>
            <div className="min-h-screen bg-primary p-8 text-white">
                <div className="max-w-7xl mx-auto">
                    <button onClick={() => router.back()} className="mb-6 flex items-center gap-2 text-secondary hover:text-white">
                        <ArrowBackIcon /> Back to Dashboard
                    </button>

                    <h1 className={`${styles.sectionHeadText} mb-10`}>Manage Projects</h1>

                    {/* Add Project Form */}
                    <div className="bg-black-100 p-8 rounded-2xl mb-12 border border-gray-800">
                        <h2 className="text-2xl font-bold mb-6">Add New Project</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col">
                                    <span className="mb-2 font-medium">Project Name</span>
                                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="bg-tertiary p-3 rounded-lg outline-none text-white" required />
                                </label>
                                <label className="flex flex-col">
                                    <span className="mb-2 font-medium">Image</span>
                                    <input type="file" onChange={handleImageChange} className="bg-tertiary p-3 rounded-lg outline-none text-white" accept="image/*" required />
                                </label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col">
                                    <span className="mb-2 font-medium">GitHub Link</span>
                                    <input type="url" value={github} onChange={e => setGithub(e.target.value)} className="bg-tertiary p-3 rounded-lg outline-none text-white" />
                                </label>
                                <label className="flex flex-col">
                                    <span className="mb-2 font-medium">Live Demo Link</span>
                                    <input type="url" value={liveUrl} onChange={e => setLiveUrl(e.target.value)} className="bg-tertiary p-3 rounded-lg outline-none text-white" />
                                </label>
                            </div>

                            <button type="submit" disabled={uploading} className="bg-violet-600 py-3 px-8 rounded-xl font-bold mt-4 hover:bg-violet-700 transition disabled:opacity-50 w-fit">
                                {uploading ? <div className='flex gap-2 items-center'>Uploading... <LoadingSpinner /></div> : 'Add Project'}
                            </button>
                        </form>
                    </div>

                    {/* Projects List */}
                    <h2 className="text-2xl font-bold mb-6">Existing Projects</h2>
                    {loading ? <LoadingSpinner /> : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <div key={project.id} className="bg-tertiary p-5 rounded-2xl relative group">
                                    <img src={project.img} alt={project.name} className="w-full h-48 object-cover rounded-xl mb-4" />
                                    <h3 className="text-xl font-bold">{project.name}</h3>
                                    <div className="flex gap-2 mt-2 text-sm text-secondary">
                                        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">GitHub</a>}
                                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">Live Demo</a>}
                                    </div>

                                    <button
                                        onClick={() => handleDelete(project.id)}
                                        className="absolute top-4 right-4 bg-red-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        title="Delete Project"
                                    >
                                        <DeleteIcon />
                                    </button>
                                </div>
                            ))}
                            {projects.length === 0 && <p className="text-secondary">No projects found. Add one above!</p>}
                        </div>
                    )}
                </div>
            </div>
        </AdminGuard>
    );
}
