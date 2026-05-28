// ============================================================
// auth.js — Funcions d'autenticació i perfil d'usuari
// Aquest fitxer s'inclou a totes les pàgines que necessiten
// saber si l'usuari ha iniciat sessió.
// ============================================================

/**
 * getUserProfile()
 * Obté la sessió activa i el nom d'usuari del perfil a la base de dades.
 *
 * @returns {Object|null}
 *   - null → l'usuari NO ha iniciat sessió
 *   - { session, username } → l'usuari SÍ ha iniciat sessió
 *     (username pot ser null si encara no ha triat un nom)
 */
async function getUserProfile() {
    // Demana a Supabase la sessió actual de l'usuari (token JWT guardat al navegador)
    const { data: { session } } = await client.auth.getSession()

    // Si no hi ha sessió activa, retornem null (usuari no autenticat)
    if (!session) {
        return null
    }

    // Consulta la taula "profiles" per obtenir el username associat a l'usuari
    // .maybeSingle() retorna null en lloc d'error si no troba cap fila
    const { data } = await client
        .from("profiles")
        .select("username")
        .eq("id", session.user.id)  // filtra pel UUID de l'usuari autenticat
        .maybeSingle()

    // Retorna la sessió i el username (o null si el perfil no té username)
    return {
        session,
        username: data?.username || null
    }
}
