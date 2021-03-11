const Cache = require('@11ty/eleventy-cache-assets');

/**
 * Grabs the remote data for studio images and returns back
 * an array of objects
 *
 * @returns {Array} Empty or array of objects
 */
module.exports = async () => {
  try {
    // Grabs either the fresh remote data or cached data (will always be fresh live)
    const {resources} = await Cache(
      'https://res.cloudinary.com/wikilouis/image/list/studio.json',
      {
        duration: '1d', // 1 day
        type: 'json'
      }
    );

    return resources;
  } catch (ex) {
    console.log(ex);

    // If failed, return back an empty array
    return [];
  }
};
