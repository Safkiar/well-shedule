import { saveEventData, deleteEventData } from "../services/firebaseData";

export const handleCommitChanges =
  (data, setData) =>
  ({ added, changed, deleted }) => {
    if (added) {
      const newEventId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      const newEvent = { id: newEventId, ...added };
      console.log("Adding new event with ID:", newEventId);
      setData([...data, newEvent]);
      saveEventData(newEventId.toString(), newEvent);
    }

    if (changed) {
      const updatedData = data.map((appointment) =>
        changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment
      );
      setData(updatedData);
      Object.keys(changed).forEach((eventId) => {
        saveEventData(
          eventId,
          updatedData.find(
            (appointment) => appointment.id === parseInt(eventId)
          )
        );
      });
    }

    if (deleted !== undefined) {
      const filteredData = data.filter(
        (appointment) => appointment.id !== deleted
      );
      setData(filteredData);
      deleteEventData(deleted.toString());
    }
  };
