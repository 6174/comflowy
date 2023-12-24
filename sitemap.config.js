/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://comflowy.com",
  transform: async (config, path) => {

    console.log("origin:", path);
    path = modifyUrl(path);
    // Use default transformation for all other cases
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}

function modifyUrl(url) {
    // Check if the URL ends with .zh-CN
    if (/.zh-CN$/.test(url)) {
        return url.replace(/(.*).zh-CN$/, 'zh-CN/$1');
    }
    // Check if the URL ends with .en-US
    else if (/.en-US$/.test(url)) {
        return url.replace(/(.*)\/(.*).en-US$/, '$1/$2');
    }
    // If the URL doesn't match any of the above conditions, return it as is
    else {
        return url;
    }
}