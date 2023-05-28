export default async function sitemap() {
    const baseUrl = "https://www.example.com"
    return [
        {url: baseUrl, lastModified: new Date()},
        {url: `${baseUrl}/about`, lastModified: new Date()},
        {url: `${baseUrl}/course`, lastModified: new Date()},
        {url: `${baseUrl}/committee`, lastModified: new Date()}
    ]
}