export default async function handler(req, res) {

  const { cv } = req.body;

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `
Eres un recruiter senior experto en CVs y ATS.
Devuelve:
1. CV mejorado
2. Errores
3. Mejoras
            `
          },
          {
            role: "user",
            content: cv
          }
        ]
      })
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}