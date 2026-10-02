export type Story = {
  slug: string;
  title: string;
  category: string;
  author: string;
  excerpt: string;
  image: string;
  publishedAt: string;
  readTime: string;
  content: string[];
};

export const categories = ['Politics', 'Business', 'World', 'Technology', 'Culture', 'Sports'];

export const articles: Story[] = [
  {
    slug: 'new-climate-initiative-gains-support',
    title: 'New climate initiative gains support across major cities',
    category: 'Politics',
    author: 'Alyssa Hart',
    excerpt: 'Urban leaders are moving quickly to expand infrastructure and policy changes tied to cleaner transport and lower emissions.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'Oct 2, 2026',
    readTime: '5 min read',
    content: [
      'City officials across the country are accelerating investment in low-emission transport and sustainable infrastructure, as pressure grows to meet climate targets before the next election cycle.',
      'The new initiative centers on cleaner buses, expanded bike networks, and reduced emissions from municipal fleets. Policy analysts say the strategy is designed to improve public trust by pairing environmental goals with immediate quality-of-life benefits.',
      'Support is strongest in large metro regions, where congestion and air quality concerns are most visible. Leaders argue that the program also offers long-term economic benefits through lower energy costs, job creation, and stronger resilience during extreme weather events.',
      'Critics remain cautious, however, stressing that implementation must be paired with transparent budgets and measurable outcomes. The debate is likely to continue as cities weigh short-term spending against long-term gains.'
    ],
  },
  {
    slug: 'markets-rebound-as-policy-signals-improve',
    title: 'Markets rebound as investors weigh fresh policy signals',
    category: 'Business',
    author: 'Daniel Brooks',
    excerpt: 'Major exchanges continued their climb after analysts flagged stronger-than-expected confidence among retailers and manufacturers.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'Oct 2, 2026',
    readTime: '4 min read',
    content: [
      'Investors responded positively to new signs of resilience across the industrial and retail sectors, helping markets recover after a brief period of volatility.',
      'Analysts said the rebound reflects a broader shift in sentiment, as businesses appear more willing to expand hiring and capital spending. That optimism is being measured against lingering concerns about inflation, freight costs, and the pace of policy decisions.',
      'Global stock indexes posted gains, but early trading remained mixed as sectors reacted differently to the latest macroeconomic data. Financial strategists say the next few weeks will be critical for investors looking for breadth beyond a handful of major technology names.',
      'The revival in confidence may be temporary, but it signals renewed appetite for risk in a market that has spent months pricing uncertainty into equity valuations.'
    ],
  },
  {
    slug: 'regional-trade-routes-expand-amid-supply-boost',
    title: 'Regional trade routes expand as shipping capacity returns',
    category: 'World',
    author: 'Maja Leclerc',
    excerpt: 'Ports and freight operators are reporting improved movement of goods after months of disruption and delayed schedules.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'Oct 1, 2026',
    readTime: '6 min read',
    content: [
      'Cross-border cargo movement is picking up pace as shipping routes return to more predictable schedules, providing relief to manufacturers and distributors still adjusting to post-pandemic supply conditions.',
      'Port authorities say the improvement is partly driven by stronger coordination across logistics networks and a modest reduction in congestion at major terminals. Economists expect the stabilization to help lower costs for goods moving between regional hubs.',
      'Yet the broader outlook remains mixed. Major export markets are still balancing shipping volume against energy costs and shifts in consumer demand, leaving some businesses cautious about scaling up too quickly.',
      'Industry groups are urging additional investment in port capacity and digital tracking systems to prevent future bottlenecks and better support regional trade partnerships.'
    ],
  },
  {
    slug: 'ai-lab-looks-to-expand-ethical-research',
    title: 'AI lab looks to expand ethical research and open testing',
    category: 'Technology',
    author: 'Priya Nair',
    excerpt: 'Researchers say transparent benchmarks and safer deployment frameworks are becoming essential as enterprise use of AI grows.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'Sep 29, 2026',
    readTime: '7 min read',
    content: [
      'A growing number of AI labs are shifting focus toward transparent evaluation systems, as pressure builds for broader accountability and clearer public reporting.',
      'The latest effort focuses on improving benchmark fairness, reducing model drift, and creating safer pathways for enterprise deployment. Advocates say this approach can help organizations adopt AI responsibly without slowing innovation.',
      'Industry leaders are also calling for clearer standards around testing, consent, and model auditing, especially in sectors involving health, education, and public policy.',
      'The push toward ethical research reflects a wider recognition that trust is now a competitive business advantage, not a secondary concern.'
    ],
  },
  {
    slug: 'designers-rally-for-richer-public-spaces',
    title: 'Designers rally for richer urban public spaces',
    category: 'Culture',
    author: 'Lena Ross',
    excerpt: 'Architects and community groups are arguing that public squares should prioritize inclusion, walking, and cultural life.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'Sep 27, 2026',
    readTime: '5 min read',
    content: [
      'Urban designers are pushing for public spaces that are not just visually attractive but genuinely useful to the people who live and work nearby.',
      'The latest movement embraces shade, seating, local art, and accessible pathways, arguing that public environments should support both daily life and social interaction.',
      'In many cities, residents are also calling for more flexible spaces that can host markets, performances, and neighborhood gatherings without being restricted by rigid planning rules.',
      'Design experts say rethinking civic space is essential to building healthier, more connected communities and to making cities feel more welcoming to residents of every age and background.'
    ],
  },
  {
    slug: 'season-opener-roundup-and-key-matchups',
    title: 'Season opener delivers big surprises and key matchups to watch',
    category: 'Sports',
    author: 'Marcus Hayes',
    excerpt: 'Teams across the league produced late-game drama and standout performances in a thrilling opening slate.',
    image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1200&q=80',
    publishedAt: 'Sep 25, 2026',
    readTime: '4 min read',
    content: [
      'The opening round of the season brought a slate of dramatic finishes, tactical surprises, and standout performances from emerging players across the league.',
      'Coaches praised the intensity of the early matchups, noting that teams are adapting quickly to strategic changes and physical demands after a shortened offseason.',
      'Analysts say the most intriguing storylines involve balancing veteran experience with youth movement, especially in high-pressure closing stretches.',
      'With the schedule intensifying, fans are looking to see which teams can maintain consistency while others continue to settle into their new systems.'
    ],
  }
];

export const featuredStories = [
  articles[0],
  articles[1],
  articles[2],
  articles[3],
];
