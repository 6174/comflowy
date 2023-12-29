/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.comflowy.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  transform: async (config, path) => {

    path = modifyUrl(path);
    // Use default transformation for all other cases

    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority:  getURLPriority(path),
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => {
    const result = [];
    result.push({
      loc: '/',
      priority: 1.0
    })
    return result;
  }
}

function modifyUrl(url) {
    // Check if the URL ends with .zh-CN
    if (/.zh-CN$/.test(url)) {
        url = url.replace(/(.*).zh-CN$/, 'zh-CN$1');
    }
    // Check if the URL ends with .en-US
    else if (/.en-US$/.test(url)) {
        url = url.replace(/(.*)\/(.*).en-US$/, '$1/$2');
    }

    if (/index$/.test(url)) {
        url = url.replace(/(.*)\/index$/, '$1');
    }

    // If the URL doesn't match any of the above conditions, return it as is
    return url;
}

function getURLPriority(url) {
  console.log(url);
  if (url === "zh-CN" || url.trim() === "") {
    return 1.0
  }

  if (/blog$/.test(url)) {
    return  0.6
  }

  return 0.7
}