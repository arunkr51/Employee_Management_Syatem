const BASE_URL = "https://jsonplaceholder.typicode.com/users"

export const fetchEmployeesAPI = async () => {
  const response = await fetch(BASE_URL)
  if (!response.ok) throw new Error("Failed to fetch employees")
  return await response.json()
}

export const addEmployeeAPI = async (data) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error("Failed to add employee")
  return await response.json()
}

export const deleteEmployeeAPI = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) throw new Error("Failed to delete employee")
  return id
}

export const updateEmployeeAPI = async (data) => {
  const response = await fetch(`${BASE_URL}/${data.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error("Failed to update employee")
  return await response.json()
}