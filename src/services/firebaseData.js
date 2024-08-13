import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

// Function to fetch all events from the "1" collection
export async function getAllEvents() {
  try {
    const eventsCollection = collection(db, "1");
    const snapshot = await getDocs(eventsCollection);
    const eventsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return eventsData;
  } catch (error) {
    console.error("Error getting events:", error.message);
    return [];
  }
}

// Function to save an event (same as before)
export async function saveEventData(eventId, eventData) {
  try {
    const eventRef = doc(db, "1", eventId);
    console.log("Saving data for Event ID:", eventId);
    await setDoc(eventRef, eventData);
    console.log("Data saved successfully!");
  } catch (error) {
    console.error("Error saving data:", error.message);
  }
}

// Function to delete an event
export async function deleteEventData(eventId) {
  try {
    const eventRef = doc(db, "1", eventId);
    console.log("Deleting data for Event ID:", eventId);
    await deleteDoc(eventRef);
    console.log(`Event with ID ${eventId} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting data:", error.message);
  }
}
