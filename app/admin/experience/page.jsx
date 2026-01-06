'use client';
import { useState, useEffect } from 'react';
import AdminGuard from '@/components/AdminGuard';
import { styles } from '@/styles';
import { db } from '@/utils/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { uploadToCloudinary } from '@/utils/cloudinary';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function ExperienceAdmin() {
    const router = useRouter();
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);

    // Form State
    const [title, setTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [date, setDate] = useState('');
    const [points, setPoints] = useState(''); // Textarea content
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [bgColor, setBgColor] = useState('#383E56'); // Default color

    useEffect(() => {
        fetchExperiences();
    }, []);

    const fetchExperiences = async () => {
        setLoading(true);
        try {
            // Ideally order by date or created at
            const querySnapshot = await getDocs(collection(db, 'experiences'));
            const expData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setExperiences(expData);
        } catch (error) {
            console.error("Error fetching experiences: ", error);
            alert("Failed to fetch experiences");
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
        if (!title || !companyName || !image) {
            alert("Title, Company Name and Icon are required");
            return;
        }

        setUploading(true);
        try {
            // 1. Upload Image to Cloudinary
            const imageUrl = await uploadToCloudinary(image);
            if (!imageUrl) throw new Error("Image upload failed");

            // 2. Process Points
            const pointsArray = points.split('\n').filter(p => p.trim() !== '');

            // 3. Add to Firestore
            await addDoc(collection(db, 'experiences'), {
                title,
                company_name: companyName,
                date,
                icon: imageUrl,
                iconBg: bgColor,
                points: pointsArray,
                createdAt: new Date()
            });

            alert("Experience added successfully!");
            // Reset form
            setTitle('');
            setCompanyName('');
            setDate('');
            setPoints('');
            setImage(null);
            fetchExperiences();
        } catch (error) {
            console.error("Error adding experience: ", error);
            alert("Error adding experience");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this experience?")) return;
        try {
            await deleteDoc(doc(db, 'experiences', id));
            fetchExperiences();
        } catch (error) {
            console.error("Error deleting experience: ", error);
            alert("Failed to delete experience");
        }
    };

    return (
        <AdminGuard>
            <div className="min-h-screen bg-primary p-8 text-white">
                <div className="max-w-7xl mx-auto">
                    <button onClick={() => router.back()} className="mb-6 flex items-center gap-2 text-secondary hover:text-white">
                        <ArrowBackIcon /> Back to Dashboard
                    </button>

                    <h1 className={`${styles.sectionHeadText} mb-10`}>Manage Experience</h1>

                    {/* Add Experience Form */}
                    <div className="bg-black-100 p-8 rounded-2xl mb-12 border border-gray-800">
                        <h2 className="text-2xl font-bold mb-6">Add New Experience</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col">
                                    <span className="mb-2 font-medium">Job Title</span>
                                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="bg-tertiary p-3 rounded-lg outline-none text-white" required />
                                </label>
                                <label className="flex flex-col">
                                    <span className="mb-2 font-medium">Company Name</span>
                                    <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} className="bg-tertiary p-3 rounded-lg outline-none text-white" required />
                                </label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col">
                                    <span className="mb-2 font-medium">Date Range</span>
                                    <input type="text" value={date} onChange={e => setDate(e.target.value)} className="bg-tertiary p-3 rounded-lg outline-none text-white" placeholder="e.g. Jan 2023 - Present" />
                                </label>
                                <label className="flex flex-col">
                                    <span className="mb-2 font-medium">Company Icon</span>
                                    <input type="file" onChange={handleImageChange} className="bg-tertiary p-3 rounded-lg outline-none text-white" accept="image/*" required />
                                </label>
                            </div>

                            <label className="flex flex-col">
                                <span className="mb-2 font-medium">Description Points (One per line)</span>
                                <textarea rows={5} value={points} onChange={e => setPoints(e.target.value)} className="bg-tertiary p-3 rounded-lg outline-none text-white" placeholder="- Worked on cool stuff&#10;- Fixed bugs" />
                            </label>

                            <button type="submit" disabled={uploading} className="bg-violet-600 py-3 px-8 rounded-xl font-bold mt-4 hover:bg-violet-700 transition disabled:opacity-50 w-fit">
                                {uploading ? <div className='flex gap-2 items-center'>Uploading... <LoadingSpinner /></div> : 'Add Experience'}
                            </button>
                        </form>
                    </div>

                    {/* Experience List */}
                    <h2 className="text-2xl font-bold mb-6">Existing Experience</h2>
                    {loading ? <LoadingSpinner /> : (
                        <div className="flex flex-col gap-5">
                            {experiences.map((exp) => (
                                <div key={exp.id} className="bg-tertiary p-5 rounded-2xl relative group flex gap-4 items-start">
                                    <img src={exp.icon} alt={exp.company_name} className="w-16 h-16 object-contain bg-white rounded-full p-1" />
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                        <p className="text-secondary text-[16px] font-semibold">{exp.company_name}</p>
                                        <p className="text-gray-400 text-[14px] mb-2">{exp.date}</p>
                                        <ul className='list-disc ml-5 space-y-1'>
                                            {exp.points && exp.points.map((point, i) => (
                                                <li key={i} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        onClick={() => handleDelete(exp.id)}
                                        className="absolute top-4 right-4 bg-red-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        title="Delete Experience"
                                    >
                                        <DeleteIcon />
                                    </button>
                                </div>
                            ))}
                            {experiences.length === 0 && <p className="text-secondary">No experience found. Add one above!</p>}
                        </div>
                    )}
                </div>
            </div>
        </AdminGuard>
    );
}
