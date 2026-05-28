// ============================================================
// api/groq.js — Endpoint de servidor per analitzar CVs amb IA
// Rep el CV de l'usuari via POST i el envia a l'API de Groq
// (model LLaMA 3.3 70B) perquè el revisi i proposi millores.
// ============================================================

/**
 * handler(req, res)
 * Funció principal de l'endpoint /api/groq.
 * Accepta NOMÉS peticions POST amb el cos: { cv: "text del CV" }
 */
export default async function handler(req, res) {

  // Rebutja qualsevol mètode que no sigui POST (GET, PUT, DELETE, etc.)
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Extreu el text del CV enviat pel frontend
    const { cv } = req.body;

    // Crida a l'API de Groq per analitzar el CV
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // La clau API es llegeix de les variables d'entorn (mai exposada al frontend)
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",  // Model LLaMA 3.3 de 70B paràmetres
          messages: [
            {
              // Missatge de sistema: defineix el rol i comportament de la IA
              role: "system",
              content: "Eres un experto en CVs. Devuelve mejoras claras."
            },
            {
              // Missatge d'usuari: el text del CV que cal analitzar
              role: "user",
              content: cv || ""   // si cv és undefined, envia cadena buida
            }
          ]
        })
      }
    );

    // Converteix la resposta de Groq a JSON i la retorna al frontend
    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    // Si hi ha qualsevol error de xarxa o del servidor, retorna codi 500
    return res.status(500).json({
      error: error.message
    });
  }
}
