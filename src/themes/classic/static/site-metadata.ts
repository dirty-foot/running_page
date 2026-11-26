interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://dirtyfoot.run',
  logo: '![0jg150xHFHXQ.jpg](https://img.remit.ee/i/0jg150xHFHXQ)',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://github.com/dirty-foot/gitblog',
    },
    {
      name: 'About',
      url: 'https://github.com/dirty-foot/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
