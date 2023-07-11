const suggestedSearchText = [
  "What is the impact of stress and anxiety on nightmares?",
  "What are the benefits of polyphasic sleep?",
  "How does human mortality affect morality?",
];

const recentSearchText = [
  "What is the impact of stress and anxiety on daydreams?",
  "What are the risks of monophasic sleep?",
  "How does human morality affect mortality?",
];

const generateBrainstormData = (input: string) => [
  `What factors contribute to ${input}?`,
  `How does ${input} work on a small scale?`,
  `What is the impact of ${input} on a global scale?`,
  `What are the risks of ${input}?`,
  `How has ${input} changed over time?`,
];

const sectionHeadings = ["", "Paper title", "Abstract summary"];

const generateResultsData = (searchInput: string) => [
  {
    id: "1",
    title: `A brief review of ${searchInput}`,
    author: ["Author", "Writer", "Editor"],
    journal: "Journal",
    isStarred: true,
    year: 2030,
    citations: 10,
    doi: "https://doi.org/",
    abstract:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem rem assumenda unde obcaecati asperiores nemo doloribus eaque ipsum repudiandae necessitatibus odit accusamus iusto, dolore et corrupti distinctio! Sed doloribus quam est quis mollitia aliquam ad deserunt quibusdam quo, ipsam eum fugiat quidem fugit molestias adipisci dicta. Consequatur esse accusamus odit nobis ut quam eos sunt labore, distinctio sint asperiores, omnis quisquam nisi illum blanditiis nostrum accusantium. Sint delectus, fuga nisi quaerat explicabo facere velit minima assumenda, amet mollitia sunt. Cumque blanditiis doloribus expedita? Sunt corrupti molestiae perferendis natus quia ullam enim temporibus qui. Reprehenderit nam dolores iure quia, quos blanditiis.",
  },
  {
    id: "2",
    title: `A meta-analysis of ${searchInput}`,
    author: ["AuthorA", "WriterB", "EditorC"],
    journal: "Journal1",
    isStarred: false,
    year: 1999,
    citations: 100,
    doi: "https://doi.org/",
    abstract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda voluptatem sunt repellendus sed natus debitis cum vero ratione error corrupti quo pariatur, voluptas veniam quidem itaque nulla ut illum officia voluptate id. Aliquam, eligendi sed? Obcaecati non deserunt quae eligendi alias dicta quaerat, assumenda dignissimos sequi fuga quisquam reprehenderit?",
  },
  {
    id: "3",
    title: `${searchInput}: A quantitative analysis`,
    author: ["Author12", "Writer12", "Editor12"],
    journal: "Journal12",
    isStarred: false,
    year: 123,
    citations: 123,
    doi: "https://doi.org/",
    abstract:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim labore voluptatem quia eligendi minima rem illum nesciunt doloremque iure cupiditate atque autem eos iste doloribus veniam sapiente magni, placeat nihil obcaecati. Architecto, ullam. Ea asperiores consequuntur dolorum doloribus? Reprehenderit dolore non vel unde optio repudiandae numquam perferendis amet modi harum deserunt obcaecati sint debitis vero, accusantium suscipit. Iure nulla quibusdam ullam explicabo voluptates, excepturi fugiat natus, rem inventore eum voluptate error repellendus veritatis, adipisci eos! Totam impedit voluptatibus reiciendis nostrum?",
  },
];

const generatePaperSummary = () => [
  {
    heading: "Abstract summary",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.",
  },
  {
    heading: "What did they test?",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.",
  },
  {
    heading: "What outcomes did they measure?",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.",
  },
  {
    heading: "Population characteristics",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.",
  },
];

const generatePaperText = () => [
  {
    heading: "Abstract",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ullam nam asperiores commodi, quisquam earum ducimus eveniet tempore nemo architecto natus suscipit corrupti molestiae molestias dignissimos qui saepe, accusamus ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.",
    ],
  },
  {
    heading: "Methodology",
    paragraphs: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque deserunt corporis ipsam laborum saepe ipsa! Maiores voluptas delectus eaque incidunt assumenda dolor cum veritatis, tenetur iste recusandae numquam consequatur deserunt nostrum harum, odit, ipsam non nihil tempora? Animi unde quasi suscipit in, rem corrupti officiis labore reprehenderit voluptates, explicabo voluptatem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.",
    ],
  },
  {
    heading: "Discussion",
    paragraphs: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque deserunt corporis ipsam laborum saepe ipsa! Maiores voluptas delectus eaque incidunt assumenda dolor cum veritatis, tenetur iste recusandae numquam consequatur deserunt nostrum harum, odit, ipsam non nihil tempora? Animi unde quasi suscipit in, rem corrupti officiis labore reprehenderit voluptates, explicabo voluptatem. ",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque deserunt corporis ipsam laborum saepe ipsa! Maiores voluptas delectus eaque incidunt assumenda dolor cum veritatis, tenetur iste recusandae numquam consequatur deserunt nostrum harum, odit, ipsam non nihil tempora? Animi unde quasi suscipit in, rem corrupti officiis labore reprehenderit voluptates, explicabo voluptatem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla unde sit dolorem alias excepturi labore, assumenda suscipit minus fugit.",
    ],
  },
];

export {
  suggestedSearchText,
  recentSearchText,
  sectionHeadings,
  generateBrainstormData,
  generateResultsData,
  generatePaperSummary,
  generatePaperText,
};
