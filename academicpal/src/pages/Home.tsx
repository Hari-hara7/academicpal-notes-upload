import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import ResourceCard from "../components/ResourceCard";
import { Search, Filter, Book, GraduationCap, Calendar } from "lucide-react";

const HomePage = () => {
  const [resources, setResources] = useState<any[]>([]);
  const [filteredResources, setFilteredResources] = useState<any[]>([]);
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");

  // Fetch resources from Firestore
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "resources"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setResources(data);
        setFilteredResources(data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };
    fetchResources();
  }, []);

  // Filter resources whenever filters change
  useEffect(() => {
    let filtered = resources;

    console.log("Selected Filters:", { year, semester, branch, subject });

    if (year) filtered = filtered.filter((res) => res.year === year);
    if (semester) filtered = filtered.filter((res) => res.semester.toString() === semester);
    if (branch) {
      filtered = filtered.filter((res) => {
        const dbBranch = res.branch?.trim().toLowerCase();
        const selectedBranch = branch.trim().toLowerCase();
        console.log(`Checking Branch: DB Value = "${dbBranch}", Selected = "${selectedBranch}"`);
        return dbBranch === selectedBranch;
      });
    }
    if (subject) {
      filtered = filtered.filter((res) => {
        const dbSubject = res.subject?.trim().toLowerCase();
        const searchSubject = subject.trim().toLowerCase();
        return dbSubject.includes(searchSubject);
      });
    }
    console.log("Filtered Resources:", filtered);
    setFilteredResources(filtered);
  }, [year, semester, branch, subject, resources]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-extrabold text-center text-cyan-400 mb-10">
        📚 Explore Resources
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center bg-opacity-80 bg-gray-900 p-6 rounded-xl shadow-lg backdrop-blur-md border border-gray-700 mb-10">
        {/* Year Selection */}
        <div className="relative flex items-center">
          <GraduationCap className="absolute left-3 text-gray-400" size={20} />
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-cyan-400"
          >
            <option value="">Year</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
          </select>
        </div>

        {/* Semester Selection */}
        <div className="relative flex items-center">
          <Calendar className="absolute left-3 text-gray-400" size={20} />
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-cyan-400"
          >
            <option value="">Semester</option>
            {Array.from({ length: 8 }, (_, i) => (
              <option key={i} value={`${i + 1}`}>{`${i + 1}th Semester`}</option>
            ))}
          </select>
        </div>

        {/* Branch Selection */}
        <div className="relative flex items-center">
          <Filter className="absolute left-3 text-gray-400" size={20} />
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-cyan-400"
          >
            <option value="">Branch</option>
            <option value="CSE">CSE</option>
            <option value="CSE-FSD">CSE Full Stack Development</option>
            <option value="ISE">ISE</option>
            <option value="AIML">AIML</option>
            <option value="AIDS">AIDS</option>
            <option value="CyberSecurity">Cyber Security</option>
            <option value="CEC">CEC</option>
            <option value="ECE">ECE</option>
            <option value="ECE-VLSI">ECE VLSI</option>
            <option value="ME">Mechanical</option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="CE">Civil</option>
            <option value="EEE">EEE</option>
          </select>
        </div>

        {/* Subject Search */}
        <div className="relative flex items-center">
          <Book className="absolute left-3 text-gray-400" size={20} />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Search Subject"
            className="pl-10 pr-4 py-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-cyan-400"
          />
        </div>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))
        ) : (
          <div className="col-span-3 text-center">
            <p className="text-gray-400 text-lg font-semibold">
              ❌ No resources found. Try adjusting the filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
