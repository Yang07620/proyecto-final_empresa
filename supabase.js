// ============================================================
// supabase.js — Configuració del client de Supabase
// Crea la connexió global amb la base de dades Supabase
// i la guarda a window.client perquè altres scripts la puguin usar.
// ============================================================

// Crea el client de Supabase amb l'URL del projecte i la clau pública (anon key).
// Aquesta clau és segura d'exposar al frontend (és de lectura pública).
const client = window.supabase.createClient(
    "https://ienbdthevfgjglymjgfa.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbmJkdGhldmZnamdseW1qZ2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczNzg0MzEsImV4cCI6MjA5Mjk1NDQzMX0.O1Vhd6F_okqCmm-lKvajJEz0dcUel1DKdw5wWEEKS_M"
)

// Exposa el client globalment perquè login.html, registrar.html, etc. el puguin usar
window.client = client;
