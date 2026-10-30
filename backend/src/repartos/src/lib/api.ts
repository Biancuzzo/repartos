const API_URL = "http://127.0.0.1:8000";

export async function loginOperario(
  usuario: string,
  contrasena: string
) {
  const response = await fetch(
    `${API_URL}/operario/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario,
        contrasena,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Credenciales inválidas");
  }

  return response.json();
}
export async function loginRepartidor(token: string) {
  const response = await fetch(
    `${API_URL}/repartidor/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Token inválido o error en el servidor.");
  }

  return response.json();
}

