import weaviate, { WeaviateClient, vectorizer, generative } from 'weaviate-client';
import 'dotenv/config'



const weaviateURL = process.env.WEAVIATE_URL as string;
const weaviateApiKey = process.env.WEAVIATE_API_KEY as string;
// const cohereApiKey = process.env.OPENAI_API_KEY as string
const cohereApiKey = process.env.COHERE_APIKEY || '';

console.log(cohereApiKey)

export async function main1() {




    const client = await weaviate.connectToWeaviateCloud(
        weaviateURL,  // Replace with your instance URL
        {
            authCredentials: new weaviate.ApiKey(weaviateApiKey),
            headers: {
                'X-Cohere-Api-Key': cohereApiKey,
            }
        }
    )

    console.log(await client.isReady())

    const res = await client.collections.create({
      name: 'DemoCollection3',
      properties: [
        {
          name: 'type',
          dataType: 'text' as const,
        },
        {
            name: 'description',
            dataType: 'text' as const,
        },
        {
            name: 'title',
            dataType: 'text' as const
        }
      ],
      vectorizers: [
        weaviate.configure.vectorizer.text2VecCohere({
          name: 'title_vector',
          sourceProperties: ['type', 'description', 'title'],
          model: 'embed-multilingual-light-v3.0',
        }),

      ],
      generative: weaviate.configure.generative.cohere({
        model: 'command-r-plus'
      }),
      // Additional parameters not shown
    });


    const collectionName = 'DemoCollection3'
    const myCollection = client.collections.get(collectionName)
    
    
    
   
    const response = await myCollection.data.insertMany(data);
    
    console.log(response);
}






// const weaviateURL = process.env.WEAVIATE_URL as string




export const data = [{
    "type": "video",
    "description": "This is an inspiring video about mindfulness and productivity.",
    "title": "Mindfulness and Productivity Tips"
},
{
    "type": "tweet",
    "description": "A tweet sharing tips for staying motivated during tough times.",
    "title": "Motivation Tweet"
},
{
    "type": "link",
    "description": "A comprehensive guide on building effective habits.",
    "title": "Habit-Building Guide"
},
{
    "type": "document",
    "description": "An in-depth analysis of the impact of technology on modern education.",
    "title": "Technology in Education"
},
{
    "type": "video",
    "description": "A heartwarming story about acts of kindness around the world.",
    "title": "Acts of Kindness"
}, {
    "type": "video",
    "description": "A motivational talk about overcoming challenges and achieving goals.",
    "title": "Overcoming Challenges"
},
{
    "type": "tweet",
    "description": "An inspirational quote about perseverance and growth.",
    "title": "Quote on Perseverance"
},
{
    "type": "link",
    "description": "A detailed article on the latest advancements in AI technology.",
    "title": "AI Innovations 2024"
},
{
    "type": "document",
    "description": "A research paper on the effects of climate change on global ecosystems.",
    "title": "Climate Change Effects"
},
{
    "type": "video",
    "description": "An engaging documentary about ancient civilizations.",
    "title": "Exploring Ancient Civilizations"
},
{
    "type": "tweet",
    "description": "A thread discussing the importance of mental health awareness.",
    "title": "Mental Health Awareness"
},
{
    "type": "link",
    "description": "A blog post with tips for achieving work-life balance.",
    "title": "Work-Life Balance Guide"
},
{
    "type": "document",
    "description": "A comprehensive report on the global economic outlook for 2025.",
    "title": "Economic Outlook 2025"
},
{
    "type": "video",
    "description": "A tutorial on learning the basics of Python programming.",
    "title": "Python for Beginners"
},
{
    "type": "tweet",
    "description": "A tweet highlighting the top 5 books for personal development.",
    "title": "Book Recommendations"
},
{
    "type": "link",
    "description": "An online course covering the fundamentals of digital marketing.",
    "title": "Digital Marketing 101"
},
{
    "type": "document",
    "description": "A step-by-step guide on creating a personal budget plan.",
    "title": "Budget Planning Made Easy"
},
{
    "type": "video",
    "description": "A short film illustrating the power of empathy in everyday life.",
    "title": "Power of Empathy"
},
{
    "type": "tweet",
    "description": "A tweet summarizing key takeaways from a popular self-help book.",
    "title": "Self-Help Book Insights"
},
{
    "type": "link",
    "description": "A website providing free resources for learning graphic design.",
    "title": "Graphic Design Resources"
},
{
    "type": "document",
    "description": "A whitepaper on the future of renewable energy solutions.",
    "title": "Future of Renewable Energy"
}
]