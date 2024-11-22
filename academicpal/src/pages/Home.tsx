import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import ResourceCard from "../components/ResourceCard";

const Home = () => {
  const [resources, setResources] = useState<any[]>([]);

  useEffect(() => {
    const fetchResources = async () => {
      const querySnapshot = await getDocs(collection(db, "resources"));
      const resourcesData = querySnapshot.docs.map((doc) => doc.data());
      setResources(resourcesData);
    };
    fetchResources();
  }, []);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-extrabold text-cyan-400 mb-6 text-center">
        Study Resources
      </h1>
      <p className="text-gray-300 text-lg mb-8 text-center">
        Find valuable resources shared by NMAMIT students. Browse or contribute your materials!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default Home;
