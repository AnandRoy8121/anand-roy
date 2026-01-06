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

export default function SkillsAdmin() {
    const router = useRouter();
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    // Form State
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, 'technologies'));
            const skillsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setSkills(skillsData);
        } catch (error) {
            console.error("Error fetching skills: ", error);
            alert("Failed to fetch skills");
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
            alert("Name and Icon are required");
            return;
        }

        setUploading(true);
        try {
            // 1. Upload Image to Cloudinary
            const imageUrl = await uploadToCloudinary(image);
            if (!imageUrl) throw new Error("Image upload failed");

            // 2. Add to Firestore
            await addDoc(collection(db, 'technologies'), {
                name,
                icon: imageUrl,
            });

            alert("Skill added successfully!");
            // Reset form
            setName('');
            setImage(null);
            fetchSkills();
        } catch (error) {
            console.error("Error adding skill: ", error);
            alert("Error adding skill");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this skill?")) return;
        try {
            await deleteDoc(doc(db, 'technologies', id));
            fetchSkills();
        } catch (error) {
            console.error("Error deleting skill: ", error);
            alert("Failed to delete skill");
        }
    };

    return (
        <AdminGuard>
            <div className="min-h-screen bg-primary p-8 text-white">
                <div className="max-w-7xl mx-auto">
                    <button onClick={() => router.back()} className="mb-6 flex items-center gap-2 text-secondary hover:text-white">
                        <ArrowBackIcon /> Back to Dashboard
                    </button>

                    <h1 className={`${styles.sectionHeadText} mb-10`}>Manage Skills</h1>

                    {/* Add Skill Form */}
                    <div className="bg-black-100 p-8 rounded-2xl mb-12 border border-gray-800">
                        <h2 className="text-2xl font-bold mb-6">Add New Skill</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col">
                                    <span className="mb-2 font-medium">Skill Name</span>
                                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="bg-tertiary p-3 rounded-lg outline-none text-white" required />
                                </label>
                                <label className="flex flex-col">
                                    <span className="mb-2 font-medium">Icon</span>
                                    <input type="file" onChange={handleImageChange} className="bg-tertiary p-3 rounded-lg outline-none text-white" accept="image/*" required />
                                </label>
                            </div>

                            <button type="submit" disabled={uploading} className="bg-violet-600 py-3 px-8 rounded-xl font-bold mt-4 hover:bg-violet-700 transition disabled:opacity-50 w-fit">
                                {uploading ? <div className='flex gap-2 items-center'>Uploading... <LoadingSpinner /></div> : 'Add Skill'}
                            </button>
                        </form>
                    </div>

                    {/* Skills List */}
                    <h2 className="text-2xl font-bold mb-6">Existing Skills</h2>
                    {loading ? <LoadingSpinner /> : (
                        <div className="flex flex-wrap gap-10 justify-center">
                            {skills.map((skill) => (
                                <div key={skill.id} className="flex flex-col items-center gap-2 relative group w-28 h-28">
                                    <div className='w-20 h-20 rounded-full border border-violet-400 object-contain flex items-center justify-center bg-gray-100 overflow-hidden'>
                                        <img className="w-full h-full object-cover" src={skill.icon} alt={skill.name} />
                                    </div>
                                    <span className="text-center">{skill.name}</span>

                                    <button
                                        onClick={() => handleDelete(skill.id)}
                                        className="absolute -top-2 -right-2 bg-red-600 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                                        title="Delete Skill"
                                    >
                                        <DeleteIcon fontSize="small" />
                                    </button>
                                </div>
                            ))}
                            {skills.length === 0 && <p className="text-secondary">No skills found. Add one above!</p>}
                        </div>
                    )}
                </div>
            </div>
        </AdminGuard>
    );
}
