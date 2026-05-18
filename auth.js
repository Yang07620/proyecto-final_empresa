async function getUserProfile() {
    const { data: { session } } = await client.auth.getSession()

    if (!session) {
        return null
    }

    const { data } = await client
        .from("profiles")
        .select("username")
        .eq("id", session.user.id)
        .maybeSingle()

    return {
        session,
        username: data?.username || null
    }
}