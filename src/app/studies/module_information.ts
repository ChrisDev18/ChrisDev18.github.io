import {CourseItem} from "@/app/components/CourseCards";

export const y1_items: CourseItem[] = [
  {
    id: "algorithms",
    title: "Data Structures & Algorithms",
    content: `
This module introduced the fundamentals of data structures and algorithms.

- Design and implementation of data structures and algorithms.
- Prove the correctness of algorithms and analyse their time and space complexity.
- Apply data structures to our own programs.
`
  },
  {
    id: "java",
    title: "Object Oriented Programming in Java",
    content: `
This module introduced the principles of object-oriented programming, imperative algorithms, and data structures, whilst teaching us the Java programming language.
`
  },
  {
    id: "math",
    title: "Mathematical and Logical Foundations",
    content: `
This module explored topics such as linear algebra, abstract algebra, set theory, and propositional and predicate logic. 

- Solve mathematical problems in algebra and set theory.
- Apply algorithms for key logic problems, such as satisfiability.
- Write formal proofs for propositional and predicate logic.
`
  },
  {
    id: "ai1",
    title: "Artificial Intelligence 1",
    content: `
This module covered topics such as knowledge representation, search, optimisation, and learning.

- Grasp core principles of Optimisation and Machine Learning.
- Connect basic concepts of uni-variate differentiation with AI techniques.
- Apply fundamental AI principles to solve practical problems.
`
  },
  {
    id: "theories",
    title: "Theories of Computation",
    content: `
This module introduced principles and techniques for formalising computation and computability.
- Determine whether a problem is solvable, and how efficiently it can be solved.
- Describe and utilise the relationship between finite automata and regular languages.
- Automata theory (such as Turing machines), 
- Define formal languages (using regular expressions and grammars),
`
  },
  {
    id: "fulllstack",
    title: "Full-Stack Development",
    content: `
This module introduced a range of tools and techniques essential for full stack software development.

- Design, populate, and query a database.
- Create and implement a front-end interface.
- Develop server-side application software.
- Integrate a database, server, and front-end into a complete software stack.
- Utilise modern development tools efficiently.
`
  },
];

export const y2_items: CourseItem[] = [
  {
    id: "os",
    title: "Operating Systems",
    content: `
This module covered the technology behind operating systems and introduces the challenges of systems-level programming.
- Understand computer architecture and operating systems.
- Program in C, learning to use pointers and manage memory effectively.
- Write code that interacts with the OS kernel.
`
  },
  {
    id: "sepp",
    title: "Software Engineering & Professional Practice",
    content: `
This module introduced the principles of systematically engineering large-scale software systems. 

- Apply techniques for systematically engineering requirements, designing, architecting, and testing software systems, considering technical, economical, legal, and ethical trade-offs.
- Describe and apply the core principles of software project management, metrication, and quality assurance.
`
  },
  {
    id: "functional",
    title: "Functional Programming",
    content: `
This module developed practical programming skills in Haskell - a typed functional programming language.
`
  },
  {
    id: "ai2",
    title: "Artificial Intelligence 2",
    content: `
This module taught a more probabilistic approach to AI, introducing the principles that enable AI to manage uncertainty in inference, search, optimisation, and learning.

- Frameworks for consistently handling uncertainty in AI.
- Principles of inference and data fitting in AI models under uncertainty.
- Randomised search and optimisation techniques.
`
  },
  {
    id: "teamproject",
    title: "Team Project",
    content: `
For this project, I worked in a team of six to develop a Spotify listening analysis app using JHipster, Angular, Java, and Spring Boot. 
The app was designed to analyse user listening data, providing insightful metrics and recommendations.

- Collaboration in a team to design and implement a full-stack web application.
- Using JHipster to scaffold and integrate Angular, Java, and Spring Boot.
- Developing front-end user interfaces in Angular.
- Working with Spring Boot to create a back-end service capable of processing Spotify data.
- Best practices in software development, including version control, testing, and debugging.
- Integrating third-party APIs (such as the Spotify API) to gather and analyse data.
`
  },
  {
    id: "security",
    title: "Security & Networks",
    content: `
This module focused on authentication and cryptography as well as attacks, vulnerabilities, and defenses.

- The basic concepts of cryptography and SQL.
- Foundational concepts of cloud services, particularly storage.
- Understanding threats to data stored locally and in the cloud, and whilst it's transmitted over a network.
- Identifying potential risks and applying techniques to mitigate or eliminate them.
`
  },
];

export const if3s1: CourseItem[] = [
  {
    id: "algebra",
    title: "Linear Algebra and Image Synthesis",
    content: `
The first part of the module taught linear algebra, focusing on matrix-based problems.

- Eigenvalues & Eigenvectors, and Diagonalising a matrix.
- Minimal & Characteristic Polynomials of a matrix.
- Elementary Divisors and deriving Jordan Form.
- Iterative methods (Jacobi and Gauss-Seidel) to solve linear systems,
- Power iteration and Wielandt deflation to calculate Eigenvalues
- MATLAB to apply different numerical methods to solve matrix problems.

The second part introduced key concepts of image synthesis teaching 3D transformations, geometric modeling, and visualisation.

- Applying 3D transformations to objects in 3D space.
- Illumination models and procedural generation techniques (using perlin noise to produce terrain).
- Display techniques such as ray-casting (implementing a ray-marcher in GLSL to visualise a scene).
- GLSL to render simple objects, building up to more complex scenes with sky, terrain and water.
    `
  },
  {
    id: "signal",
    title: "Signal and Image Processing",
    content: `
The first part introduced Signal Processing and the Fourier transform
- Fourier series and transform and convolution operator.
- Transfer functions, impulse responses, and complex spectra.
- Discrete signal processing: sampling and aliasing.
- Using the Discrete Fourier Transform to analyse spectra.
- MATLAB for visualising signal spectra and performing various filtering techniques.

The second part introduced Image Processing and how signal processing can be applied to analyse and enhance images.
- Basics of image signals: File types, color encoding, and histograms.
- Filtering techniques: Convolution filters for image processing.
- MATLAB for applying techniques to images (applying simple filters, convolutions, and Wiener filtering).
`
  },
  {
    id: "cpp",
    title: "Introduction to C++",
    content: `
This course reintroduced Object Oriented Programming using C++.
 
- Defining and using specifications to ensure our programs are robust and match expected behaviour.
- Implementing proper data encapsulation and access control within classes.
- Understanding the use of virtual methods, pure virtual methods, and abstract classes.
`
  },
];

export const if4s1: CourseItem[] = [
  {
    id: "network",
    title: "Network Programming",
    content: `
This course introduced network programming concepts and techniques, focusing on communication protocols and application-level programming.

- The OSI layered network architecture
- High-level application-layer protocols (HTTP, FTP, SMTP)
- Socket programming and network APIs
- RPC and RMI communication in C and Java.
- Programming a Mancala game in C, played over the local network.
- Blockchain and distributed systems.
`
  },
  {
    id: "semantic",
    title: "Semantic Web",
    content: `
This course introduced the concept of Semantic Web (Web 3.0), structured data sharing and reasoning across applications.
For half of the module we made a search engine web app in groups of 6.

- Learning RDF and OWL (two key data representation standards).
- Querying structured data with SPARQL.
- Using RIF (Rule Interchange Format) to logically reason with Web data.
- Hands-on practice with RDF graphs, semantic queries, and DBpedia.
- Developing a Video Game search engine website which allows a user to search DBpedia's index for video games and traverse the information index.
- Use React with Vite to produce a modern web application.
`
  },
];

export const if5s1: CourseItem[] = [
  {
    id: "textmining",
    title: "Text Mining",
    content: `
This course explored techniques for extracting knowledge from text. It covered scraping, preprocessing, and analysis.

- Text cleaning and preprocessing techniques
- Converting text into numerical representations
- Syntactic and semantic text analysis
- Text comparison and information retrieval
- Neural networks and language models for text analysis
- Introduction to generative models like GPT

The module consisted of three projects:
1. **Semantic Analysis:** determine whether IMDB reviews are positive or negative.
2. **Web Scraping:** extract the title and body text from news website articles.
3. **Sexism Detection:** determine whether tweets are sexist in nature, and determine the type of sexism present.
`
  },
  {
    id: "ml_data",
    title: "Machine Learning and Data Analytics",
    content: `
This course taught the theory behind different machine learning techniques and analysing large datasets.

- Exploring clustering, pattern mining, and optimisation techniques.
- Learning key algorithms, their limitations, and parameter tuning.
- Machine learning methods such as Regression Analysis and Deep Learning (CNN, GAN, RNN etc...).
- Discovering structured and dynamic patterns in big data.
- Applying this extracted data to machine learning.

The module had two projects:
1. **Machine Learning:** training a CNN to detect faces in pictures.
2. **Data Mining:** mining data from a large dataset of player gameplay to train a model to predict a player based on gameplay.
`
  },
  {
    id: "mobile",
    title: "Android Mobile Development",
    content: `
The aim of this module was to produce an Android application in a group of 3. My group made a historical monument map 
app which allows users to discover what monuments are nearby, and look up other monuments on a map. 

- Learning to create UIs in Jetpack Compose (declarative UI framework).
- Programming in Kotlin.
- Using the Clean architecture (Data, Domain, and Presentation layers).
- Leveraging a French governmental API to access data about historical monuments.
`
  },
];

export const if3s2: CourseItem[] = [
  {
    id: "web data",
    title: "Data Management for Web",
    content: ``
  },
  {
    id: "uml",
    title: "Software Engineering",
    content: ``
  },
  {
    id: "probabilities",
    title: "Probabilities",
    content: ``
  },
];

export const if4s2 = [
  {
    id: "ml",
    title: "Machine Learning",
    content: ``
  },
  {
    id: "ethics",
    title: "Environmental and Societal Challenges",
    content: ``
  },
  {
    id: "compiler",
    title: "Compiler Project",
    content: ``
  },
  {
    id: "smart",
    title: "INSA SMART Project",
    content: ``
  },
];

export const y4_items: CourseItem[] = [
  {
    id: "plpdi",
    title: "Programming Languages and Compilers",
    content: ``
  },
  {
    id: "neural",
    title: "Neural Computation",
    content: ``
  },
  {
    id: "vision",
    title: "Computer Vision",
    content: ``
  }
];