
const articles = [
  {
    id: 1,
    slug: "how-wifi-works",
    category: "Internet",
    readTime: "5 min read",
    title: "What actually happens when you connect to Wi-Fi?",
    description:
      "Invisible radio waves, routers and a journey of data explain how your devices connect to the internet.",
    number: "01",
    content: [
      "You probably connect to Wi-Fi several times a day. You use it to watch videos, send messages, attend online classes and browse websites. But have you ever wondered how your phone communicates with a router without any physical cable connecting the two? The answer lies in something you cannot see: radio waves.",
      
      "Wi-Fi is a wireless communication technology that allows devices to exchange information using radio signals. Your phone, laptop or tablet has a wireless network adapter that sends and receives these signals. Your router acts as a central connection point, allowing your devices to communicate with your local network and access the internet.",
      
      "Imagine opening a website on your laptop. First, your laptop sends a request through radio signals to your Wi-Fi router. The router forwards that request through your internet service provider to reach the appropriate destination. The website's server processes the request and sends the required information back. Your router receives the response and transmits it wirelessly to your laptop.",
      
      "Wi-Fi commonly operates on the 2.4 GHz, 5 GHz and 6 GHz frequency bands. These bands have different characteristics. The 2.4 GHz band generally covers longer distances and can pass through obstacles more effectively, while 5 GHz and 6 GHz can offer faster connections under suitable conditions. However, walls, distance and interference from other devices can affect performance.",
      
      "An interesting thing to remember is that Wi-Fi and the internet are not the same thing. Wi-Fi is simply a way for your device to connect wirelessly to a network. That network may provide internet access, but a Wi-Fi connection can also work locally without an active internet connection.",
      
      "So, the next time you connect your phone to Wi-Fi, think about what is happening behind the scenes. Your device is exchanging carefully organised signals with another machine, turning invisible radio waves into the websites, videos and messages you use every day."
    ]
  },

  {
    id: 2,
    slug: "how-chatgpt-works",
    category: "Artificial Intelligence",
    readTime: "6 min read",
    title: "Does ChatGPT actually understand what you say?",
    description:
      "Explore what happens inside a language model when you ask a question and receive an answer.",
    number: "02",
    content: [
      "You ask ChatGPT a question, and within seconds it gives you an answer that sounds natural, thoughtful and sometimes surprisingly human. It can explain difficult topics, write code, summarise information and even help you brainstorm ideas. But does it actually understand your question in the same way a person does?",
      
      "ChatGPT is powered by a type of artificial intelligence called a large language model, or LLM. These models are trained using large collections of text and other data. During training, they learn patterns in language, relationships between words and structures that help them generate meaningful responses.",
      
      "When you type a message, the model does not process it exactly as you see it on your screen. Your text is broken into smaller units called tokens. A token might represent a complete word, part of a word or even punctuation. These tokens are converted into numerical representations that the model can process.",
      
      "One of the important technologies behind modern language models is called the Transformer architecture. Transformers use a mechanism known as attention to help the model identify relationships between different parts of the input. For example, in a long sentence, attention helps the model connect a pronoun with the person or object it refers to.",
      
      "After processing your message and its context, the model generates a response by predicting what token is likely to come next. It repeats this process, producing one token after another until the response is complete. This is why a response appears gradually rather than being retrieved as one fixed paragraph from a database.",
      
      "However, generating convincing language does not mean that a model has human experiences, emotions or consciousness. It can produce a useful explanation without experiencing the world in the way a person does. It can also make mistakes, misunderstand context or confidently present incorrect information.",
      
      "The fascinating part is that a system trained to recognise patterns in data can perform such a wide range of language tasks. The next time you receive an AI-generated answer, remember that behind those familiar sentences is a complex system of mathematical operations, learned patterns and predictions."
    ]
  },

  {
    id: 3,
    slug: "what-happens-when-you-visit-a-website",
    category: "Web Development",
    readTime: "6 min read",
    title: "What really happens when you type a website address?",
    description:
      "Follow the hidden journey of a website request, from your browser to a remote server and back.",
    number: "03",
    content: [
      "You type a website address into your browser, press Enter and a webpage appears. It feels like an instant action, but several processes take place behind the scenes before you can see anything on your screen. Your browser, DNS servers, web servers and different web technologies work together to make it happen.",
      
      "The first important step is finding the server where the website is hosted. Computers communicate using IP addresses, but people generally remember domain names such as example.com. This is where DNS, or the Domain Name System, becomes important. DNS translates a domain name into an IP address so your browser can locate the correct server.",
      
      "Once the browser has the required address, it establishes a connection with the server. For secure websites, this usually involves HTTPS, which uses encryption to protect information exchanged between the browser and the server. This helps prevent others from easily reading or modifying the communication.",
      
      "Your browser then sends an HTTP request asking the server for the webpage or another resource. The server receives the request, processes it and sends back an HTTP response. The response may contain HTML, which provides the structure of the webpage, along with links to CSS, JavaScript, images and other resources.",
      
      "HTML gives a webpage its structure. CSS controls its appearance, including colours, spacing, fonts and layouts. JavaScript adds behaviour and interactivity, such as opening menus, responding to button clicks or updating information without reloading the entire page.",
      
      "Your browser reads these resources, builds the page and displays it. It also performs additional work such as calculating layouts, applying styles and executing JavaScript. This is why developers need to think about performance: large images, unnecessary scripts or slow server responses can make a website feel sluggish.",
      
      "A simple action like visiting a website is actually a conversation between multiple systems. The next time a page loads in a fraction of a second, remember that your browser has completed a surprisingly complicated journey to make it happen."
    ]
  },

  {
    id: 4,
    slug: "how-ai-learns-from-data",
    category: "Artificial Intelligence",
    readTime: "6 min read",
    title: "How does artificial intelligence learn from examples?",
    description:
      "Discover how machine learning systems identify patterns in data instead of following only fixed instructions.",
    number: "04",
    content: [
      "Imagine teaching a computer to recognise photographs of cats and dogs. You could try writing hundreds of rules describing their appearance, but that would quickly become difficult. Different breeds, colours, sizes and camera angles would make the task complicated. Machine learning offers another approach: let the computer learn patterns from examples.",
      
      "Machine learning is a branch of artificial intelligence in which systems use data to identify patterns and make predictions or decisions. Instead of programming every possible situation manually, developers provide examples and choose an algorithm that can learn from those examples.",
      
      "In a typical supervised learning task, a model receives training examples that include both input data and correct answers, known as labels. For example, a dataset might contain thousands of labelled images showing cats and dogs. The model examines these examples and gradually adjusts its internal parameters to improve its predictions.",
      
      "During training, the model makes predictions and compares them with the correct answers. A mathematical function called a loss function measures how far the predictions are from the expected results. An optimisation algorithm then adjusts the model's parameters to reduce this error over time.",
      
      "Once training is complete, the model can be tested on data it has not previously seen. This is important because a model that performs well only on its training examples may simply have memorised them. The ability to perform well on new examples is called generalisation.",
      
      "Machine learning is used in many everyday technologies. Email services use it to identify spam, streaming platforms use it to recommend content, and navigation applications use predictive systems to estimate travel times. Medical research also uses machine learning to help analyse complex datasets.",
      
      "However, machine learning is not magic. The quality of its results depends on the data, the model, the training process and how the system is evaluated. Poor or biased data can lead to poor predictions. Understanding how a model learns is therefore just as important as understanding what it can do."
    ]
  },

  {
    id: 5,
    slug: "how-search-engines-work",
    category: "Internet",
    readTime: "5 min read",
    title: "How does Google find answers in milliseconds?",
    description:
      "Discover how search engines explore, organise and rank an enormous collection of web pages.",
    number: "05",
    content: [
      "Think about how often you search for something online. You type a few words, press Enter and receive millions of possible results in a fraction of a second. But search engines do not scan the entire internet from the beginning every time you perform a search. They use an enormous organised collection of information that has already been discovered and processed.",
      
      "The first major process is crawling. Search engines use automated programs, often called crawlers or bots, to discover webpages. These programs visit known pages, follow links to other pages and find new or updated content. This allows search engines to continuously explore a changing internet.",
      
      "The next process is indexing. Once a page has been discovered, the search engine analyses its content and stores useful information about it in an organised index. This may include words, images, page details and information about the relationships between pages. Not every discovered page is necessarily indexed.",
      
      "When you search for something, the search engine examines its index to identify pages that may answer your query. It then uses ranking systems to arrange those pages. Relevance, content quality, usefulness, page experience and many other signals can influence where a result appears.",
      
      "For example, imagine searching for how Wi-Fi works. A search engine needs to identify pages that discuss wireless networking, radio signals and routers. It then attempts to show the most useful results rather than simply displaying every page containing the words Wi-Fi.",
      
      "Modern search engines also use sophisticated language-processing systems to interpret the meaning and intent behind a query. This helps them respond to searches even when the wording is different from the exact words used on a webpage.",
      
      "Search engines are constantly updating their indexes and improving their ranking systems. The next time you search for something and receive an answer almost instantly, remember that much of the hard work happened long before you typed your question."
    ]
  },

  {
    id: 6,
    slug: "what-is-an-api",
    category: "Web Development",
    readTime: "5 min read",
    title: "How do different apps communicate with each other?",
    description:
      "Understand how APIs allow different software applications to exchange information and services.",
    number: "06",
    content: [
      "Imagine opening a weather application on your phone. It displays the temperature, humidity and forecast for your city. But where does all that information come from? The application may not collect weather information itself. Instead, it can request information from another service using something called an API.",
      
      "API stands for Application Programming Interface. It is a defined way for different software systems to communicate with each other. An API describes what requests can be made, what information is required and what kind of response can be expected.",
      
      "Think of an API like a restaurant menu. You do not enter the kitchen and prepare your meal yourself. You choose something from the menu, place an order and receive the result. Similarly, an application sends a request to an API, and the service processes that request and returns a response.",
      
      "For example, a weather application might send a request asking for the current weather in Delhi. The weather service receives the request, retrieves the relevant information and sends a response. Many web APIs return this information in JSON, a format that is easy for applications to read and process.",
      
      "APIs are used in countless digital services. When an online store processes a payment, it may communicate with a payment provider through an API. A travel application may use mapping APIs to display locations and routes. A website may use an API to display information from a news service.",
      
      "Developers often use HTTP methods such as GET, POST, PUT and DELETE when working with web APIs. These methods indicate the kind of operation being requested, such as retrieving information or submitting new data.",
      
      "APIs make modern software development more flexible because developers do not need to build every feature from scratch. They can connect existing services and focus on creating useful experiences. In many ways, APIs are the invisible bridges connecting the applications we use every day."
    ]
  },

  {
    id: 7,
    slug: "why-ai-makes-mistakes",
    category: "Artificial Intelligence",
    readTime: "5 min read",
    title: "Why can artificial intelligence sound confident and still be wrong?",
    description:
      "Explore AI hallucinations, limitations and why checking machine-generated information matters.",
    number: "07",
    content: [
      "One of the most interesting things about modern AI is how naturally it can communicate. It can explain complicated subjects, answer questions and produce detailed paragraphs. However, there is a problem: sometimes an AI system gives an answer that sounds completely convincing but is actually incorrect.",
      
      "This behaviour is often called an AI hallucination. It happens when a model generates information that is false, misleading or unsupported, while presenting it as though it were reliable.",
      
      "To understand why this happens, it helps to remember how language models generate responses. They learn statistical patterns from training data and use context to predict likely sequences of tokens. Their main process is not the same as checking every statement against a verified database of facts.",
      
      "For example, if you ask an AI system about a scientific study that does not exist, it may sometimes generate a convincing title, author names or publication details. The answer may sound realistic because it follows familiar patterns, but that does not make the information genuine.",
      
      "Hallucinations can happen for several reasons. A question may be unclear, the available context may be incomplete, or the model may encounter a topic where reliable information is limited. Some systems also have limitations in accessing current information or verifying sources.",
      
      "This does not mean AI is useless. Language models can be valuable tools for learning, brainstorming, summarising and explaining difficult ideas. The important thing is to understand their limitations and treat important claims carefully.",
      
      "A good habit is to verify important information using reliable sources, especially when dealing with research, health, education or current events. AI can help you explore an idea, but critical thinking helps you decide whether the answer deserves your trust."
    ]
  },

  {
    id: 8,
    slug: "how-websites-are-built",
    category: "Web Development",
    readTime: "6 min read",
    title: "How is a website actually built from scratch?",
    description:
      "Explore the three essential building blocks of the web: HTML, CSS and JavaScript.",
    number: "08",
    content: [
      "Every time you open a website, you see a combination of text, images, colours, buttons, menus and interactive elements. Although these may look like separate pieces, most websites are built using three fundamental technologies: HTML, CSS and JavaScript.",
      
      "HTML stands for HyperText Markup Language. It provides the structure and meaning of a webpage. Think of it as the framework of a building. It tells the browser which elements are headings, paragraphs, images, links, forms and other parts of the page.",
      
      "CSS stands for Cascading Style Sheets. It controls how those HTML elements look. Developers use CSS to define colours, typography, spacing, borders, layouts and responsive behaviour. Without CSS, a webpage would generally look much more basic and unstyled.",
      
      "JavaScript adds behaviour and interactivity. It allows a website to respond when someone clicks a button, types into a search box or opens a navigation menu. It can also update parts of a webpage without requiring the browser to reload everything.",
      
      "Consider a simple search box on a website. HTML creates the input field, CSS makes it visually appealing, and JavaScript can read what the visitor types and filter the displayed results. Each technology has a different responsibility, but they work together to create one experience.",
      
      "Modern websites may also use libraries and frameworks such as React, which help developers organise complex interfaces into reusable components. Instead of writing every part of a page repeatedly, developers can create components such as navigation bars, article cards and footers and reuse them throughout the application.",
      
      "Building a website also involves thinking about accessibility, mobile screens, loading speed, security and user experience. A website is not complete simply because it looks attractive on a laptop. It should also be usable and reliable across different devices.",
      
      "The interesting thing is that a website you use every day is ultimately the result of structured information, visual styling and instructions that tell the browser how to behave. Once you understand these three building blocks, the web becomes much less mysterious."
    ]
  },

  {
    id: 9,
    slug: "what-is-generative-ai",
    category: "Artificial Intelligence",
    readTime: "6 min read",
    title: "How can AI create images, music and stories?",
    description:
      "Discover generative AI and how machines can create new content from patterns learned during training.",
    number: "09",
    content: [
      "Imagine describing a picture in a few sentences and watching an AI system turn your words into an image. Or asking a tool to create a story, generate music or help design a presentation. These abilities are examples of generative artificial intelligence, one of the most fascinating areas of modern computing.",
      
      "Generative AI refers to systems that can create new content, such as text, images, audio, video or computer code. Instead of only classifying existing information or making predictions, these systems generate outputs based on patterns learned during training.",
      
      "Different generative systems use different model architectures. Text generation systems often use large language models. Image-generation systems may use diffusion models, which learn how to gradually transform noise into structured images that match a given description.",
      
      "During training, these systems process large datasets and learn patterns in the information they receive. An image model, for example, may learn relationships between objects, shapes, colours, textures and visual styles. When someone provides a prompt, the model uses what it has learned to generate a new output.",
      
      "This does not mean the AI creates in exactly the same way a human artist does. It generates content through mathematical processes and learned representations. The result can be original in its particular arrangement, but the system does not necessarily have personal experiences or intentions behind its creation.",
      
      "Generative AI is already being used in education, design, entertainment, software development and research. It can help people explore ideas, create early drafts, produce visual concepts and work through creative problems.",
      
      "However, these tools also raise important questions about accuracy, copyright, privacy, bias and the responsible use of generated content. A generated image may contain visual errors, and an AI-written explanation may include incorrect information.",
      
      "Generative AI is changing how people interact with computers. Instead of only clicking buttons or entering fixed commands, people can describe what they want in ordinary language. It is an exciting development, but understanding both its possibilities and limitations is essential."
    ]
  },

  {
    id: 10,
    slug: "what-happens-when-you-click-a-link",
    category: "Internet",
    readTime: "5 min read",
    title: "What really happens when you click a link?",
    description:
      "Follow the journey of a hyperlink and discover how browsers move between webpages.",
    number: "10",
    content: [
      "You see a highlighted word or button on a webpage and click it. A new page opens, perhaps on a completely different website. This simple action is possible because of one of the most important ideas behind the web: hyperlinks.",
      
      "A hyperlink connects one resource to another. It may point to another webpage, a particular section of the same page, an image, a document or another type of online resource. Hyperlinks are commonly created using the HTML anchor element.",
      
      "When you click a link, your browser reads the destination address associated with it. This address is usually a URL, which stands for Uniform Resource Locator. A URL contains information that helps identify where a resource is located and how it should be accessed.",
      
      "If the link points to another website, the browser begins the process of navigating to that destination. It may need to use DNS to find the server's IP address, establish a connection and send an HTTP request. The server then responds with the requested resource.",
      
      "Not every link causes a completely new webpage to load. Some links take you to a section further down the current page. Others open email applications, download files or trigger actions through JavaScript, depending on how the website is designed.",
      
      "Links are also important for how search engines discover the web. Crawlers follow links to find other pages and understand how different resources are connected. This makes hyperlinks an important part of both website navigation and search engine discovery.",
      
      "The web is essentially a huge network of connected resources. Every time you follow a link, you are moving from one point in that network to another. A simple click is one of the fundamental actions that makes the World Wide Web work."
    ]
  }
];

export default articles;
