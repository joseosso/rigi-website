import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function createInitialPersonData() {
  const sajjadKashani = await prisma.person.create({
    data: {
      name: "Sajjad Kashani",
      photoIdentifier: "",
      type: "Undergraduate student",
      department: "Computer Science, Physics and Astronomy",
      joined: new Date("2024-05-01"),
      interests: "Academic: Quantum Computing, Artificial Intelligence, Distributed Computing, high energy physics, Gauge theory. Non-academic: Movie enthusiasts, pool player, and watch enthusiasts",
      github: "",
      linkedIn: "https://www.linkedin.com/in/sajjad-kashani-77839320b/",
      projects:[]
    },
  });
  const tristanZaborniak = await prisma.person.create({
    data: {
      name: "Tristan Zaborniak",
      photoIdentifier: "",
      type: "PhD student",
      department: "Computer Science",
      joined: new Date("2021-09-01"),
      interests: "Academic: information theory, computational complexity, optimization, evolutionary transitions, graph theory, ecological dynamics, computational linguistics, sociophysics.\n\
Non-academic: collecting instruments, optical illusions, minimalist camping, mushroom picking, free diving, poetry, microphotography, reading Italo Calvino and Jorge Luis Borges, writing, etymology.",
      github: "https://github.com/nooloop",
      linkedIn: "https://bit.ly/tzaborniak",
      projects:[]
    },
  });
  const joséOssorio = await prisma.person.create({
    data: {
      name: "José Ossorio",
      photoIdentifier: "",
      type: "Master's student",
      department: "Computer Science",
      joined: new Date("2022-09-01"),
      interests: "",
      github: "https://github.com/joseosso",
      linkedIn: "https://www.linkedin.com/in/joseosso/",
      projects:[]
    },
  });

  const samanthaNorrie = await prisma.person.create({
    data: {
      name: "Samantha Norrie",
      photoIdentifier: "",
      type: "Master's student",
      department: "Computer Science",
      joined: new Date("2022-09-01"),
      interests: "",
      github: "https://github.com/Samantha-norrie",
      linkedIn: "https://www.linkedin.com/in/samantha-norrie-845204167/",
      projects:[]
    },
  });

  return {sajjadKashani, tristanZaborniak, joséOssorio, samanthaNorrie}
}

async function createInitialProjectData() {
  const distributedQuantumComputingIEEE2024 = await prisma.project.create({
    data: {
      name: "Towards a Distributed Quantum Computing Platform for Algorithm Experiments",
      description: "Distributed quantum computing (DQC) is a rapidly evolving field with its own unique challenges. Distributing a quantum algorithm involves several key steps and considerations. The steps involve decomposition at various levels of abstraction, given the underlying quantum stack and quantum network capabilities. In our DQC design explorations, we focus on the distribution at the algorithm and circuit levels. Algorithmic distribution involves distributing tasks before compilation, allowing different quantum processing units (QPUs) to receive distinct parts of an algorithm. Circuit distribution involves executing a quantum algorithm in a distributed manner at the circuit execution level using circuit and adaptive quantum technologies. If entanglement across QPUs is supported, then quantum states can be shared between qubits on remote quantum processors. This requires a specialized architecture with data and communication qubits with non-local gates such as telegates and teledata gates. This paper presents our progress towards a framework for exploring quantum distribution at the algorithm and circuit levels. Our implementation and case studies demonstrate the feasibility of our approach and show effective pathways for distributed quantum algorithm experiments.",
      published: true,
      datePublished: new Date("2024"),
      authors: "Sajjad Kashani, Angadh Singh, Ulrike Stege",
      publicationLink: "https://www.computer.org/csdl/proceedings-article/qce/2024/413702a620/23oqfQYaVPi", 
      topics: [],
      rigiContributors: []
    },
  });

  const qnotationIEEE2024 = await prisma.project.create({
    data: {
      name: "QNotation: A Visual Browser-Based Notation Translator for Learning Quantum Computing",
      description: "One of the initial challenges of learning Quantum Computing is understanding the different notations used in the field. It is crucial that learners understand the different notations used in Quantum Computing in order to ensure that they can develop a robust comprehension of the field by being able to make use of variety of resources. Depending on their technical background, some learners may struggle with certain notations more than others. We present QNotation, a browser-based tool that helps learners explore notations in Quantum Computing by translating between a quantum circuit of the learner's choice to circuit, Dirac, and matrix notation. This allows the learner to be able to identify the differences and similarities between the different notations. QNotation was built to be used throughout one's foundational Quantum Computing learning journey. While users may start using the tool to learn the aforementioned notations, they can continue to use QNotation later on to help them learn how other core Quantum Computing concepts work. In addition to being able to load one's own quantum circuits, multiple pre-composed examples, including Quantum Fourier Transform and Grover's search algorithm, can be loaded into the tool to be explored and modified by the learner. We also present sample questions for using QNotation in the classroom. These questions focus around using QNotation to teach the aforementioned notations as well as foundational Quantum Computing concepts.",
      published: true,
      datePublished: new Date("2024"),
      authors: "Samantha Norrie, Anthony Estey, Hausi Müller, Ulrike Stege",
      publicationLink: "https://ieeexplore.ieee.org/document/10821137", 
      topics: [],
      rigiContributors: []
    },
  });

  const qgroverIEEE2024 = await prisma.project.create({
    data: {
      name: "QGrover: Teaching Grover's Algorithm Through Visual Exploration",
      description: "Quantum Computing is a rapidly growing field that requires a multidisciplinary workforce. In order to successfully educate this up-and-coming workforce, it is crucial that Quantum Computing Education is filled with a variety of tools that support different backgrounds and learning styles. Incorporating visual exploration into learning allows for the use of multiple learning channels and can promote collaborative learning. We present QGrover, an interactive visualization tool that supports the learning of Grover's algorithm, an important quantum search algorithm. QGrover is a browser-based tool that allows users to examine the different components of Grover's algorithm while exploring experimentally how different parameters affect it. We also present sample questions for using QGrover in a classroom setting. Sample answers for the questions are included with the questions.",
      published: true,
      datePublished: new Date("2024"),
      authors: "Samantha Norrie, Anthony Estey, Hausi Müller, Ulrike Stege",
      publicationLink: "https://ieeexplore.ieee.org/document/10821077", 
      topics: [],
      rigiContributors: []
    },
  });

const qnotationIEEE2023 = await prisma.project.create({
  data: {
    name: "QNotation: An Interactive Visual Tool to Lower Learning Barriers in Quantum Computing",
    description: "One of the initial challenges of learning Quantum Computing is understanding the different notations used in the field. It is crucial that learners understand the different notations used in Quantum Computing in order to ensure that they can develop a robust comprehension of the field by being able to make use of variety of resources. Depending on their technical background, some learners may struggle with certain notations more than others. We present QNotation, a browser-based tool that helps learners explore notations in Quantum Computing by translating between a quantum circuit of the learner's choice to circuit, Dirac, and matrix notation. This allows the learner to be able to identify the differences and similarities between the different notations. QNotation was built to be used throughout one's foundational Quantum Computing learning journey. While users may start using the tool to learn the aforementioned notations, they can continue to use QNotation later on to help them learn how other core Quantum Computing concepts work. In addition to being able to load one's own quantum circuits, multiple pre-composed examples, including Quantum Fourier Transform and Grover's search algorithm, can be loaded into the tool to be explored and modified by the learner. We also present sample questions for using QNotation in the classroom. These questions focus around using QNotation to teach the aforementioned notations as well as foundational Quantum Computing concepts.",
    published: true,
    datePublished: new Date("2023"),
    authors: "Samantha Norrie, Anthony Estey",
    publicationLink: "https://ieeexplore.ieee.org/document/10313602", 
    topics: [],
    rigiContributors: []
  },
});

  const quantumCryptoIEEE2024 = await prisma.project.create({
    data: {
      name: "QuantumCrypto: A Web Framework for Quantum Cryptography Education",
      description: "Quantum cryptography protocols leverage fundamental quantum computing principles such as superposition and entanglement, making them valuable tools for quantum computing education. While existing web platforms offer interactive interfaces to experiment with these protocols, none of them exploits the context in which cryptographic tasks are conducted: real-time communication between parties. We introduce QuantumCrypto-an innovative framework designed to present quantum cryptography protocols as interactive experiences connecting multiple players. QuantumCrypto aims to bridge the gap between theoretical quantum concepts and practical understanding by enabling users to engage in real-time simulations of quantum cryptography protocols. Our solution is extensible, allowing for the integration of new protocols. We demonstrate the versatility of our framework by showcasing the implementation of the BB84 protocol. Through detailed descriptions of the framework's backend and frontend components, we provide insights into its design and implementation. We also elucidate the learning experience of learners who used QuantumCrypto to simulate the BB84 protocol, and provide suggestions for utilizing our tool in a learning environment. To conclude, we summarize our work and present ideas for integrating more quantum cryptography protocols in the future.", 
      published: true,
      datePublished: new Date("2024"),
      authors: "José Ossorio, Jean Frédéric Laprade, Ulrike Stege, Hausi Müller",
      publicationLink: "https://ieeexplore.ieee.org/document/10821152", 
      topics: [],
      rigiContributors: []
    },
  });

  const qplexIEEE2023 = await prisma.project.create({
    data: {
      name: "QPLEX: Realizing the Integration of Quantum Computing into Combinatorial Optimization Software",
      description: "Quantum computing has the potential to surpass the capabilities of current classical computers when solving complex problems. Combinatorial optimization has emerged as one of the key target areas for quantum computers as problems found in this field play a critical role in many different industrial application sectors (e.g., enhancing manufacturing operations or improving decision processes). Currently, there are different types of high-performance optimization software (e.g., ILOG CPLEX and Gurobi) that support engineers and scientists in solving optimization problems using classical computers. In order to utilize quantum resources, users require domain-specific knowledge of quantum algorithms, SDKs and libraries, which can be a limiting factor for any practitioner who wants to integrate this technology into their workflows. Our goal is to add software infrastructure to a classical optimization package so that application developers can interface with quantum platforms readily when setting up their workflows. This paper presents a tool for the seamless utilization of quantum resources through a classical interface. Our approach consists of a Python library extension that provides a backend to facilitate access to multiple quantum providers. Our pipeline enables optimization software developers to experiment with quantum resources selectively and assess performance improvements of hybrid quantum-classical optimization solutions.", 
      published: true,
      datePublished: new Date("2023"),
      authors: "Juan Giraldo, José Ossorio, Norha M. Villegas, Ulrike Stege",
      publicationLink: "https://ieeexplore.ieee.org/document/10313812", 
      topics: [],
      rigiContributors: []
    },
  });

  return {qplexIEEE2023, quantumCryptoIEEE2024, qnotationIEEE2023, qnotationIEEE2024, qgroverIEEE2024, distributedQuantumComputingIEEE2024}
}

async function createInitialTopicData() {
  const quantumComputingEducation = await prisma.topic.create({
    data: {
      name: "quantum-computing-education",
      label: "QCE",
      projects: [],
      colour: "#FF0000",
    },
  });

  const distributedQuantumComputing = await prisma.topic.create({
    data: {
      name: "distributed-quantum-computing",
      label: "DQC",
      projects: [],
      colour: "#0000FF",
    },
  });

  return {quantumComputingEducation, distributedQuantumComputing}
}

async function updateRelationships(personEntities: any, projectEntities: any, topicEntities: any) {
  await prisma.$transaction(async () => {

    await prisma.project.update({
      where: { id: projectEntities.distributedQuantumComputingIEEE2024.id },
      data: { rigiContributors: { connect: [{ id: Number(personEntities.sajjadKashani.id)}] } }
    });

    await prisma.project.update({
      where: { id: projectEntities.qnotationIEEE2024.id },
      data: { rigiContributors: { connect: [{ id: Number(personEntities.samanthaNorrie.id)}] } }
    });

    await prisma.project.update({
      where: { id: projectEntities.qgroverIEEE2024.id },
      data: { rigiContributors: { connect: [{ id: Number(personEntities.samanthaNorrie.id)}] } }
    });

    await prisma.project.update({
      where: { id: projectEntities.qnotationIEEE2023.id },
      data: { rigiContributors: { connect: [{ id: Number(personEntities.samanthaNorrie.id)}] } }
    });

    await prisma.project.update({
      where: { id: projectEntities.quantumCryptoIEEE2024.id },
      data: { rigiContributors: { connect: [{ id: Number(personEntities.joséOssorio.id)}] } }
    });

    await prisma.project.update({
      where: { id: projectEntities.qplexIEEE2023.id },
      data: { rigiContributors: { connect: [{ id: personEntities.joséOssorio.id }] } }
    });
    return "Updated relationships successfully!";
  });
}
async function main() {

  const personEntities = await createInitialPersonData();
  const projectEntities = await createInitialProjectData();
  const topicEntities = await createInitialTopicData();

  await updateRelationships(personEntities, projectEntities, topicEntities);
}
main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
