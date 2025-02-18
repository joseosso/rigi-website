// seed.ts
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
      interests:
        "Academic: Quantum Computing, Artificial Intelligence, Distributed Computing, high energy physics, Gauge theory. Non-academic: Movie enthusiasts, pool player, and watch enthusiasts",
      github: "",
      linkedin: "https://www.linkedin.com/in/sajjad-kashani-77839320b/",
    },
  });

  const tristanZaborniak = await prisma.person.create({
    data: {
      name: "Tristan Zaborniak",
      photoIdentifier: "",
      type: "PhD student",
      department: "Computer Science",
      joined: new Date("2021-09-01"),
      interests:
        "Academic: information theory, computational complexity, optimization, evolutionary transitions, graph theory, ecological dynamics, computational linguistics, sociophysics.\n\
Non-academic: collecting instruments, optical illusions, minimalist camping, mushroom picking, free diving, poetry, microphotography, reading Italo Calvino and Jorge Luis Borges, writing, etymology.",
      github: "https://github.com/nooloop",
      linkedin: "https://bit.ly/tzaborniak",
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
      linkedin: "https://www.linkedin.com/in/joseosso/",
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
      linkedin: "https://www.linkedin.com/in/samantha-norrie-845204167/",
    },
  });

  return { sajjadKashani, tristanZaborniak, joséOssorio, samanthaNorrie };
}

async function createInitialProjectData() {

  const distributedQuantumComputingIEEE2024 = await prisma.project.create({
    data: {
      name: "Towards a Distributed Quantum Computing Platform for Algorithm Experiments",
      description:
        "Distributed quantum computing (DQC) is a rapidly evolving field with its own unique challenges...",
      published: true,
      datePublished: new Date("2024"),
      authors: "Sajjad Kashani, Angadh Singh, Ulrike Stege",
      publicationLink:
        "https://www.computer.org/csdl/proceedings-article/qce/2024/413702a620/23oqfQYaVPi",
    },
  });

  const multiMolecularDocking = await prisma.project.create({
    data: {
      name: "Multibody molecular docking on a quantum annealer",
      description:
        "Molecular docking, which aims to find the most stable interacting configuration of a set of molecules, is of critical importance to drug discovery. Although a considerable number of classical algorithms have been developed to carry out molecular docking, most focus on the limiting case of docking two molecules. Since the number of possible configurations of N molecules is exponential in N, those exceptions which permit docking of more than two molecules scale poorly, requiring exponential resources to find high-quality solutions. Here, we introduce a one-hot encoded quadratic unconstrained binary optimization formulation (QUBO) of the multibody molecular docking problem, which is suitable for solution by quantum annealer. Our approach involves a classical pre-computation of pairwise interactions, which scales only quadratically in the number of bodies while permitting well-vetted scoring functions like the Rosetta REF2015 energy function to be used. In a second step, we use the quantum annealer to sample low-energy docked configurations efficiently, considering all possible docked configurations simultaneously through quantum superposition. We show that we are able to minimize the time needed to find diverse low-energy docked configurations by tuning the strength of the penalty used to enforce the one-hot encoding, demonstrating a 3-4 fold improvement in solution quality and diversity over performance achieved with conventional penalty strengths. By mapping the configurational search to a form compatible with current- and future-generation quantum annealers, this work provides an alternative means of solving multibody docking problems that may prove to have performance advantages for large problems, potentially circumventing the exponential scaling of classical approaches and permitting a much more efficient solution to a problem central to drug discovery and validation pipelines.",
      published: true,
      datePublished: new Date("2022"),
      authors: "Mohit Pandey, Tristan Zaborniak, Hans Melo, Alexey Galda, Vikram K. Mulligan",
      publicationLink: "https://doi.org/10.48550/arXiv.2210.11401",
    },
  });

  const qgroverIEEE2024 = await prisma.project.create({
    data: {
      name: "QGrover: Teaching Grover's Algorithm Through Visual Exploration",
      description:
        "Quantum Computing is a rapidly growing field that requires a multidisciplinary workforce. In order to successfully educate this up-and-coming workforce, it is crucial that Quantum Computing Education is filled with a variety of tools that support different backgrounds and learning styles. Incorporating visual exploration into learning allows for the use of multiple learning channels and can promote collaborative learning.",
      published: true,
      datePublished: new Date("2024"),
      authors: "Samantha Norrie, Anthony Estey, Hausi Müller, Ulrike Stege",
      publicationLink: "https://ieeexplore.ieee.org/document/10821077",
    },
  });

  const qnotationIEEE2023 = await prisma.project.create({
    data: {
      name: "QNotation: An Interactive Visual Tool to Lower Learning Barriers in Quantum Computing",
      description:
        "One of the initial challenges of learning Quantum Computing is understanding the different notations used in the field. It is crucial that learners understand the different notations used in Quantum Computing in order to ensure that they can develop a robust comprehension of the field by being able to make use of variety of resources. Depending on their technical background, some learners may struggle with certain notations more than others.",
      published: true,
      datePublished: new Date("2023"),
      authors: "Samantha Norrie, Anthony Estey",
      publicationLink: "https://ieeexplore.ieee.org/document/10313602",
    },
  });

  const qnotationIEEE2024 = await prisma.project.create({
    data: {
      name: "QNotation: A Visual Browser-Based Notation Translator for Learning Quantum Computing",
      description:
        "One of the initial challenges of learning Quantum Computing is understanding the different notations used in the field. It is crucial that learners understand the different notations used in Quantum Computing in order to ensure that they can develop a robust comprehension of the field by being able to make use of variety of resources. Depending on their technical background, some learners may struggle with certain notations more than others.",
      published: true,
      datePublished: new Date("2024"),
      authors: "Samantha Norrie, Anthony Estey, Hausi Müller, Ulrike Stege",
      publicationLink: "https://ieeexplore.ieee.org/document/10821137",
    },
  });

  const qplexIEEE2023 = await prisma.project.create({
    data: {
      name: "QPLEX: Realizing the Integration of Quantum Computing into Combinatorial Optimization Software",
      description:
        "Quantum computing has the potential to surpass the capabilities of current classical computers when solving complex problems. Combinatorial optimization has emerged as one of the key target areas for quantum computers as problems found in this field play a critical role in many different industrial application sectors.",
      published: true,
      datePublished: new Date("2023"),
      authors: "Juan Giraldo, José Ossorio, Norha M. Villegas, Ulrike Stege",
      publicationLink: "https://ieeexplore.ieee.org/document/10313812",
    },
  });

  const quantumCryptoIEEE2024 = await prisma.project.create({
    data: {
      name: "QuantumCrypto: A Web Framework for Quantum Cryptography Education",
      description:
        "Quantum cryptography protocols leverage fundamental quantum computing principles such as superposition and entanglement, making them valuable tools for quantum computing education. While existing web platforms offer interactive interfaces to experiment with these protocols, none of them exploits the context in which cryptographic tasks are conducted: real-time communication between parties.",
      published: true,
      datePublished: new Date("2024"),
      authors:
        "José Ossorio, Jean Frédéric Laprade, Ulrike Stege, Hausi Müller",
      publicationLink: "https://ieeexplore.ieee.org/document/10821152",
    },
  });

  const quboAnnealingIEEE2022 = await prisma.project.create({
    data: {
      name: "A QUBO formulation of the RNA folding problem optimized by hybrid quantum-classical annealing",
      description:
        "RNAs self-interact through hydrogen-bond base-pairing between nucleotides and fold into specific, stable structures that substantially govern their biochemical behaviour. Experimental characterization of these structures remains difficult, hence the desire to predict them computationally from sequence information. However, correctly predicting even the base pairs involved in the folded structure of an RNA, known as secondary structure, from its sequence using minimum free energy models is understood to be NP-hard. Classical approaches rely on heuristics or avoid considering pseudoknots in order to render this problem more tractable, with the cost of inexactness or excluding an entire class of important RNA structures. Given their prospective and demonstrable advantages in certain domains, including combinatorial optimization, quantum computing approaches by contrast have the potential to compute the full RNA folding problem while remaining more feasible and exact. Herein, we present a physically-motivated QUBO model of the RNA folding problem amenable to both quantum annealers and circuit-model quantum computers and compare the performance of this formulation versus current RNA folding QUBOs after tuning the parameters of all against known RNA structures using an approach we call \"variational hybrid quantum annealing\"",
      published: true,
      datePublished: new Date("2022"),
      authors: "Tristan Zaborniak, Juan Giraldo, Hausi Müller, Hosna Jabbari, Ulrike Stege",
      publicationLink: "https://ieeexplore.ieee.org/document/9951307",
    },
  });

  const quboLandscapes = await prisma.project.create({
    data: {
      name: "Discrete quadratic model QUBO solution landscapes",
      description:
        "Many computational problems involve optimization over discrete variables with quadratic interactions. Known as discrete quadratic models (DQMs), these problems in general are NP-hard. Accordingly, there is increasing interest in encoding DQMs as quadratic unconstrained binary optimization (QUBO) models to allow their solution by quantum and quantum-inspired hardware with architectures and solution methods designed specifically for such problem types. However, converting DQMs to QUBO models often introduces invalid solutions to the solution space of the QUBO models. These solutions must be penalized by introducing appropriate constraints to the QUBO objective function that are weighted by a tunable penalty parameter to ensure that the global optimum is valid. However, selecting the strength of this parameter is non-trivial, given its influence on solution landscape structure. Here, we investigate the effects of choice of encoding and penalty strength on the structure of QUBO DQM solution landscapes and their optimization, focusing specifically on one-hot and domain-wall encodings.",
      published: true,
      datePublished: new Date("2023"),
      authors: "Tristan Zaborniak, Ulrike Stege",
      publicationLink: "https://doi.org/10.48550/arXiv.2305.00568",
    },
  });

  const qWalkVisIEEE2023 = await prisma.project.create({
    data: {
      name: "QWalkVis: Quantum Walks Visualization Application",
      description: "Quantum walks (QWs) are the quantum analogue to classical random walks. We present visualizations for quantum walks and show how they can be used to teach quantum concepts such as superposition and interference. Using our Quantum Walks Visualization Application (QWalkVis) for visualizing quan-tum walks lets the user select the dimensions, number of states, and number of steps in the walk and generates probabilistic plots on-the-fly. Users can view a plot for each step of the walk, allowing them to compare the probability distributions as time progresses. Visualizations share an important space in education; QWalkVis was created to aid students in learning about quantum walks and foundational quantum concepts through an interactive design. We highlight some potential use cases of QWalkVis for both self-directed student learning and the education in a classroom.",
      published: true,
      datePublished: new Date("2023"),
      authors: "Addie Jordon, Austin Hawkins-Seagram, Samantha Norrie, José Ossorio, Ulrike Stege",
      publicationLink:
        "https://ieeexplore.ieee.org/document/10313735",
    },
  });

  return {
    distributedQuantumComputingIEEE2024,
    multiMolecularDocking,
    qgroverIEEE2024,
    qnotationIEEE2023,
    qnotationIEEE2024,
    qplexIEEE2023,
    quantumCryptoIEEE2024,
    quboAnnealingIEEE2022,
    quboLandscapes,
    qWalkVisIEEE2023
  };
}

async function createInitialTopicData() {

  const annealing = await prisma.topic.create({
    data: {
      name: "annealing",
      label: "ANNEALING",
      colour: "#FF0009",
    },
  });

  const benchmarking = await prisma.topic.create({
    data: {
      name: "benchmarking",
      label: "BENCHMARKING",
      colour: "#FF0001",
    },
  });

  const combinatorialOptimization = await prisma.topic.create({
    data: {
      name: "combinatorial-optimization",
      label: "CO",
      colour: "#000EFF",
    },
  });

  const distributedQuantumComputing = await prisma.topic.create({
    data: {
      name: "distributed-quantum-computing",
      label: "DQC",
      colour: "#0000FF",
    },
  });

  const quantumComputingEducation = await prisma.topic.create({
    data: {
      name: "quantum-computing-education",
      label: "QCE",
      colour: "#FF0008",
    },
  });

  return {annealing, benchmarking, combinatorialOptimization, distributedQuantumComputing, quantumComputingEducation};
}

async function connectProjectsToPeople(projectEntities: any, personEntities: any) {

  await prisma.project.update({
    where: { id: projectEntities.distributedQuantumComputingIEEE2024.id },
    data: {
      rigiContributors: {
        connect: [{ id: personEntities.sajjadKashani.id }],
      },
    },
  });

  await prisma.project.update({
    where: { id: projectEntities.multiMolecularDocking.id },
    data: {
      rigiContributors: {
        connect: [{ id: personEntities.tristanZaborniak.id }],
      },
    },
  });

  await prisma.project.update({
    where: { id: projectEntities.qgroverIEEE2024.id },
    data: {
      rigiContributors: {
        connect: [{ id: personEntities.samanthaNorrie.id }],
      },
    },
  });

  await prisma.project.update({
    where: { id: projectEntities.qnotationIEEE2023.id },
    data: {
      rigiContributors: {
        connect: [{ id: personEntities.samanthaNorrie.id }],
      },
    },
  });

  await prisma.project.update({
    where: { id: projectEntities.qnotationIEEE2024.id },
    data: {
      rigiContributors: {
        connect: [{ id: personEntities.samanthaNorrie.id }],
      },
    },
  });

  await prisma.project.update({
    where: { id: projectEntities.qplexIEEE2023.id },
    data: {
      rigiContributors: {
        connect: [{ id: personEntities.joséOssorio.id }],
      },
    },
  });

  await prisma.project.update({
    where: { id: projectEntities.quantumCryptoIEEE2024.id },
    data: {
      rigiContributors: {
        connect: [{ id: personEntities.joséOssorio.id }],
      },
    },
  });

  await prisma.project.update({
    where: { id: projectEntities.quboAnnealingIEEE2022.id },
    data: {
      rigiContributors: {
        connect: [{ id: personEntities.tristanZaborniak.id }],
      },
    },
  });

  await prisma.project.update({
    where: { id: projectEntities.quboLandscapes.id },
    data: {
      rigiContributors: {
        connect: [{ id: personEntities.tristanZaborniak.id }],
      },
    },
  });

  await prisma.project.update({
    where: { id: projectEntities.qWalkVisIEEE2023.id },
    data: {
      rigiContributors: {
        connect: [{ id: personEntities.samanthaNorrie.id }, { id: personEntities.joséOssorio.id }],
      },
    },
  });

}

async function connectTopicsToProjects(topicEntities: any, projectEntities: any) {

  await prisma.topic.update({
    where: { id: topicEntities.annealing.id },
    data: {
      projects: {
        connect: [{ id: projectEntities.multiMolecularDocking.id }, { id: projectEntities.quboLandscapesIEEE2022.id }],
      },
    },
  });

  await prisma.topic.update({
    where: { id: topicEntities.benchmarking.id },
    data: {
      projects: {
        connect: [{ id: projectEntities.qplexIEEE2023.id }],
      },
    },
  });

  await prisma.topic.update({
    where: { id: topicEntities.combinatorialOptimization.id },
    data: {
      projects: {
        connect: [{ id: projectEntities.qplexIEEE2023.id }, { id: projectEntities.quboLandscapesIEEE2022.id }],
      },
    },
  });
  
  await prisma.topic.update({
    where: { id: topicEntities.distributedQuantumComputing.id },
    data: {
      projects: {
        connect: [{ id: projectEntities.distributedQuantumComputingIEEE2024.id }],
      },
    },
  });
  
  await prisma.topic.update({
    where: { id: topicEntities.quantumComputingEducation.id },
    data: {
      projects: {
        connect: [{ id: projectEntities.quantumCryptoIEEE2024.id }, { id: projectEntities.qnotationIEEE2023.id }, 
          { id: projectEntities.qnotationIEEE2024.id },  {id: projectEntities.qgroverIEEE2024.id }],
      },
    },
  });

}

async function main() {
  try {
    const personEntities = await createInitialPersonData();
    const projectEntities = await createInitialProjectData();
    const topicEntities = await createInitialTopicData();

    connectProjectsToPeople(projectEntities, personEntities);
    connectTopicsToProjects(topicEntities, projectEntities);

    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();