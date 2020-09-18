import cloudTranslate from "@google-cloud/translate";


const projectId     = "cmdruid-gcloud-api",
      { Translate } = cloudTranslate.v2,
      client        = new Translate({ projectId });


export default async function translate(q) {
    // The text to translate
    
    let [results] = await client.translate(q.text, q.target);
    return { translation: results };
}
