export async function fetchUsers() {
  try {
    const response = await fetch("https://localhost:8000/Users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching data");
      return []; // Return an empty array or handle the error as needed
    }
  } catch (error) {
    console.error("Error:", error);
    alert(error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function createUser(formData) {
  try {
    console.log(formData)
    const response = await fetch("https://localhost:8000/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      alert(message);
      throw new Error(message);
    } else {
      return response.ok;
    }
  } catch (error) {
    console.error("Error:", error);
    alert(error);
  }
}

export async function deleteUser(userId) {
  try {
    const response = await fetch(`https://localhost:8000/Users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      alert(message);
      throw new Error(message);
    } else {
      return response.ok;
    }
  } catch (error) {
    console.error("Error: ", error);
    alert(error);
  }
}

export async function fetchTrips() {
  try {
    const response = await fetch("http://localhost:8000/v1/trips/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data.trips;
    } else {
      console.error("Error fetching data");
      return []; // Return an empty array or handle the error as needed
    }
  } catch (error) {
    console.error("Error:", error);
    alert(error);
    return []; // Return an empty array or handle the error as needed
  }
}

export async function createTrip(formData) {
  try {
    const response = await fetch("http://localhost:8000/v1/trips/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      alert(message);
      throw new Error(message);
    } else {
      return response.ok;
    }
  } catch (error) {
    console.error("Error:", error);
    alert(error);
  }
}

export async function deleteTrip(tripId) {
  try {
    const response = await fetch(`http://localhost:8000/v1/trips/${tripId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      alert(message);
      throw new Error(message);
    } else {
      return response.ok;
    }
  } catch (error) {
    console.error("Error: ", error);
    alert(error);
  }
}

export async function updateTrip(updatedTripData) {
  const tripId = updatedTripData.id;
  const { id, ...tripData } = updatedTripData;

  try {
    const response = await fetch(`http://localhost:8000/v1/trips/${tripId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripData),
    });

    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      alert(message);
      throw new Error(message);
    } else {
      return response.ok;
    }
  } catch (error) {
    console.error("Error: ", error);
    alert(error);
  }
}
