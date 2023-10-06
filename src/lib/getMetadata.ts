import clientPromise from '@/lib/mongodb';

export async function getMetadata(page: string) {
  let title: string = '';
  let description: string = '';
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    const client = await clientPromise;
    const db = client.db('grachev-ai');
    const seoDB = db.collection('seo');
    const seoData = await seoDB.find({ page }).toArray();
    // console.log(seoData[0].title);
    // title = seoData[0].title;
    // description = seoData[0].description;
    ({ title, description } = seoData[0]);
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
  } catch (e) {
    console.error(e);
  }

  return {
    title,
    description,
  };
}
