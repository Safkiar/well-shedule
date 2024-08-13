import { useState, useEffect } from "react";
import { getAllEvents } from "../services/firebaseData";

const useFetchEvents = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = await getAllEvents();
        const formattedEventsData = eventsData.map((event) => ({
          ...event,
          startDate: event.startDate.toDate(),
          endDate: event.endDate.toDate(),
        }));
        setData(formattedEventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, setData };
};

export default useFetchEvents;
