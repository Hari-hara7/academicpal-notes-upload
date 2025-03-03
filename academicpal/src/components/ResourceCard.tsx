import { Resource } from "../types/resource";
import { FaLink, FaFileAlt, FaUser, FaExternalLinkAlt, FaBook, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

interface Props {
  resource: Resource;
}

const ResourceCard = ({ resource }: Props) => {
  return (
    <motion.div
      className="p-6 border-2 border-gray-700 rounded-lg shadow-lg bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
    >
      <div className="mb-4">
        <div className="flex items-center mb-3">
          <div className="mr-3">
            {resource.resourceType === "link" ? (
              <FaLink className="text-cyan-400 text-3xl" />
            ) : (
              <FaFileAlt className="text-yellow-500 text-3xl" />
            )}
          </div>
          <h2 className="font-extrabold text-lg text-white">{resource.resourceName}</h2>
        </div>

        <div className="mb-4">
          <div className="flex items-center text-gray-300">
            <FaExternalLinkAlt className="mr-2 text-cyan-400" />
            <p>Type: {resource.resourceType}</p>
          </div>
          <div className="flex items-center text-gray-300">
            <FaUser className="mr-2 text-yellow-400" />
            <p>Uploaded by: {resource.userEmail}</p>
          </div>
          <div className="flex items-center text-gray-300">
            <FaGraduationCap className="mr-2 text-purple-400" />
            <p>Year: {resource.year}, Semester: {resource.semester}</p>
          </div>
          <div className="flex items-center text-gray-300">
            <FaBook className="mr-2 text-green-400" />
            <p>Branch: {resource.branch}, Subject: {resource.subject}</p>
          </div>
        </div>

        <a
          href={resource.resourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-500 hover:text-cyan-300 hover:underline font-semibold flex items-center gap-2"
        >
          <FaExternalLinkAlt className="text-cyan-500" /> Visit Resource
        </a>

        {resource.shareableLink && (
          <a
            href={resource.shareableLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 hover:underline font-semibold flex items-center gap-2 mt-2"
          >
            <FaExternalLinkAlt className="text-green-400" /> Shareable Link
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ResourceCard;