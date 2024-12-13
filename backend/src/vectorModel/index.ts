import weaviate, { WeaviateClient, vectorizer, generative } from 'weaviate-client';
import 'dotenv/config'
import { main1 } from './data';


//const ghjv = main1();
const weaviateURL = process.env.WEAVIATE_URL as string;
const weaviateApiKey = process.env.WEAVIATE_API_KEY as string;
// const cohereApiKey = process.env.OPENAI_API_KEY as string
const cohereApiKey = process.env.COHERE_APIKEY || '';

console.log(cohereApiKey)

export async function main() {




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

    // const res = await client.collections.create({
    //   name: 'DemoCollection2',
    //   properties: [
    //     {
    //       name: 'title',
    //       dataType: 'text' as const,
    //     },
    //   ],
    //   vectorizers: [
    //     weaviate.configure.vectorizer.text2VecCohere({
    //       name: 'title_vector',
    //       sourceProperties: ['title'],
    //       model: 'embed-multilingual-light-v3.0'
    //     }),

    //   ],
    //   generative: weaviate.configure.generative.cohere({
    //     model: 'command-r-plus'
    //   }),
    //   // Additional parameters not shown
    // });


    // let myCollection = client.collections.get('DemoCollection1');

    // const singlePromptResults = await myCollection.generate.nearText(
    //   ['A holiday film'],
    //   {
    //     singlePrompt: `Translate this into French: {title}`,
    //   },
    //   {
    //     limit: 2,
    //   }
    // );

    // for (const obj of singlePromptResults.objects) {
    //   console.log(obj.properties['title']);
    //   console.log(`Generated output: ${obj.generated}`);  // Note that the generated output is per object
    // }

    let myCollection = client.collections.get('DemoCollection3');

    const groupedTaskResults = await myCollection.generate.nearText(
        ['link', ' guide on building', 'Education'],
        {
            groupedTask: `generate a statement that you find in the content, and possibly give overview of content `,
        },
        {
            limit: 6,
        }
    );

    const generateOutput = groupedTaskResults.generated;
    const content = groupedTaskResults.objects;
    console.log(`Generated output: ${generateOutput}`);  // Note that the generated output is per query
    for (const obj of groupedTaskResults.objects) {
        console.log(obj.properties['title']);
    }

    return {
        generateOutput,
        content
    }
}

main();




// const weaviateURL = process.env.WEAVIATE_URL as string
// const weaviateKey = process.env.WEAVIATE_API_KEY as string


// async function getData() {
// const client: WeaviateClient = await weaviate.connectToWeaviateCloud(weaviateURL, {
//   authCredentials: new weaviate.ApiKey(weaviateApiKey),
//   headers: {
//     'X-OpenAI-Api-Key': openaiKey,  // Replace with your inference API key
//   }
// })

// console.log(await client.isReady());



// async function nearTextQuery() {
//   const questions = client.collections.get('Question4');

//   const result = await questions.query.nearText('biology', {
//     limit:2
//   });

//   for (let object of result.objects) {
//     console.log(JSON.stringify(object.properties, null, 2));
//   }

//   return result;
// }



// const res = await nearTextQuery();

// client.close();

// }

// getData();