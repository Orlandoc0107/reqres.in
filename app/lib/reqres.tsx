import {UserSimple, User , Users} from '@/app/lib/definitions'
//List Users

const apiUrl = "https://reqres.in/api";

export async function fetchListUsers(page = 1) {
  try {
    const res = await fetch(`${apiUrl}/users?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error, fetchListUsers");
  }
}

//Single User
export async function fetchSingleUser(id: string): Promise<UserSimple> {
  try {
    const res = await fetch(`${apiUrl}/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const responseData: UserSimple = await res.json();

    return responseData;

  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error in fetchSingleUser');
  }
}
