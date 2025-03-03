import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { FaLink, FaFileAlt, FaCloudUploadAlt, FaBook } from "react-icons/fa";

const AdminPanel = ({ user }: { user: any }) => {
  const [resourceName, setResourceName] = useState("");
  const [resourceType, setResourceType] = useState<"file" | "link">("link");
  const [resourceUrl, setResourceUrl] = useState("");
  const [shareableLink, setShareableLink] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user && user.email.endsWith("@nmamit.in")) {
      await addDoc(collection(db, "resources"), {
        userEmail: user.email,
        resourceName,
        resourceType,
        resourceUrl,
        shareableLink,
        year,
        semester,
        branch,
        subject,
        createdAt: new Date(),
      });
      setResourceName("");
      setResourceType("link");
      setResourceUrl("");
      setShareableLink("");
      setYear("");
      setSemester("");
      setBranch("");
      setSubject("");
    } else {
      alert("Only @nmamit.in emails are allowed to upload resources.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-8"
    >
      <h2 className="text-3xl font-extrabold text-cyan-400 mb-6 text-center">
        <FaCloudUploadAlt className="inline-block mr-2 text-cyan-400" />
        Upload Resource
      </h2>

      <div className="mb-4">
        <label htmlFor="resourceName" className="text-gray-300 font-medium mb-2 block">
          <FaFileAlt className="inline-block mr-2 text-gray-400" />
          Resource Name
        </label>
        <input
          id="resourceName"
          type="text"
          value={resourceName}
          onChange={(e) => setResourceName(e.target.value)}
          placeholder="Enter Resource Name"
          className="w-full p-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg"
          required
        />
      </div>

      {/* Shareable Link Input */}
      <div className="mb-4">
        <label htmlFor="shareableLink" className="text-gray-300 font-medium mb-2 block">
          <FaLink className="inline-block mr-2 text-gray-400" />
          Shareable Link (Drive, etc.)
        </label>
        <input
          id="shareableLink"
          type="text"
          value={shareableLink}
          onChange={(e) => setShareableLink(e.target.value)}
          placeholder="Enter Shareable Link"
          className="w-full p-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg"
        />
      </div>

      {/* Year Dropdown */}
      <div className="mb-4">
        <label className="text-gray-300 font-medium mb-2 block">Year</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full p-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg"
          required
        >
          <option value="">Select Year</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
        </select>
      </div>

      {/* Semester Dropdown */}
      <div className="mb-4">
        <label className="text-gray-300 font-medium mb-2 block">Semester</label>
        <select
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="w-full p-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg"
          required
        >
          <option value="">Select Semester</option>
          <option value="1">1st Semester</option>
          <option value="2">2nd Semester</option>
          <option value="3">3rd Semester</option>
          <option value="4">4th Semester</option>
          <option value="5">5th Semester</option>
          <option value="6">6th Semester</option>
          <option value="7">7th Semester</option>
          <option value="8">8th Semester</option>
        </select>
      </div>

      {/* Branch Dropdown */}
      <div className="mb-4">
        <label className="text-gray-300 font-medium mb-2 block">Branch</label>
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

      {/* Subject Input */}
      <div className="mb-4">
        <label className="text-gray-300 font-medium mb-2 block">
          <FaBook className="inline-block mr-2 text-gray-400" />
          Subject
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter Subject Name"
          className="w-full p-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-400 transition duration-300"
      >
        <FaCloudUploadAlt className="inline-block mr-2" />
        Upload Resource
      </button>
    </form>
  );
};

export default AdminPanel;