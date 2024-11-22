import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { FaLink, FaFileAlt, FaCloudUploadAlt } from "react-icons/fa";

const AdminPanel = ({ user }: { user: any }) => {
  const [resourceName, setResourceName] = useState("");
  const [resourceType, setResourceType] = useState<"file" | "link">("link");
  const [resourceUrl, setResourceUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user && user.email.endsWith("@nmamit.in")) {
      await addDoc(collection(db, "resources"), {
        userEmail: user.email,
        resourceName,
        resourceType,
        resourceUrl,
      });
      setResourceName("");
      setResourceType("link");
      setResourceUrl("");
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

      <div className="mb-6">
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
          className="w-full p-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-cyan-500"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="resourceType" className="text-gray-300 font-medium mb-2 block">
          <FaLink className="inline-block mr-2 text-gray-400" />
          Resource Type
        </label>
        <select
          id="resourceType"
          value={resourceType}
          onChange={(e) => setResourceType(e.target.value as "file" | "link")}
          className="w-full p-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-cyan-500"
        >
          <option value="link">Link</option>
          <option value="file">File</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="resourceUrl" className="text-gray-300 font-medium mb-2 block">
          <FaLink className="inline-block mr-2 text-gray-400" />
          Resource URL
        </label>
        <input
          id="resourceUrl"
          type="url"
          value={resourceUrl}
          onChange={(e) => setResourceUrl(e.target.value)}
          placeholder="Enter Resource URL"
          className="w-full p-3 border-2 border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-cyan-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-400 focus:ring-4 focus:ring-cyan-300 transition duration-300"
      >
        <FaCloudUploadAlt className="inline-block mr-2" />
        Upload Resource
      </button>
    </form>
  );
};

export default AdminPanel;
