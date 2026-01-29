export default async function handler(req, res) {
  try {
    const { data, error } = await supabase
      .from("document")
      .select("*")
      .order("publication_date", { ascending: false });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Erreur de récupération des documents" });
    }

    return res.status(200).json(data);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Erreur serveur" });
  }
}