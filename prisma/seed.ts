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

  return {
    distributedQuantumComputingIEEE2024,
    qnotationIEEE2024,
    qgroverIEEE2024,
    qnotationIEEE2023,
    quantumCryptoIEEE2024,
    qplexIEEE2023,
  };
}

async function createInitialTopicData() {
  const quantumComputingEducation = await prisma.topic.create({
    data: {
      name: "quantum-computing-education",
      label: "QCE",
      colour: "#FF0008",
    },
  });

  const distributedQuantumComputing = await prisma.topic.create({
    data: {
      name: "distributed-quantum-computing",
      label: "DQC",
      colour: "#0000FF",
    },
  });

  return { quantumComputingEducation, distributedQuantumComputing };
}

async function updateRelationships(
  personEntities: any,
  projectEntities: any,
  topicEntities: any
): Promise<void> {
  try {
    // Handle person-project relationships
    await prisma.$transaction(async () => {
      await prisma.project.update({
        where: { id: projectEntities.distributedQuantumComputingIEEE2024.id },
        data: {
          rigiContributors: {
            connect: [{ id: Number(personEntities.sajjadKashani.id) }],
          },
        },
      });
      await prisma.project.update({
        where: { id: projectEntities.qnotationIEEE2024.id },
        data: {
          rigiContributors: {
            connect: [{ id: Number(personEntities.samanthaNorrie.id) }],
          },
        },
      });
      await prisma.project.update({
        where: { id: projectEntities.qgroverIEEE2024.id },
        data: {
          rigiContributors: {
            connect: [{ id: Number(personEntities.samanthaNorrie.id) }],
          },
        },
      });
    });

    // Handle remaining person-project relationships
    await prisma.$transaction(async () => {
      await prisma.project.update({
        where: { id: projectEntities.qnotationIEEE2023.id },
        data: {
          rigiContributors: {
            connect: [{ id: Number(personEntities.samanthaNorrie.id) }],
          },
        },
      });
      await prisma.project.update({
        where: { id: projectEntities.quantumCryptoIEEE2024.id },
        data: {
          rigiContributors: {
            connect: [{ id: Number(personEntities.joséOssorio.id) }],
          },
        },
      });
      await prisma.project.update({
        where: { id: projectEntities.qplexIEEE2023.id },
        data: {
          rigiContributors: {
            connect: [{ id: Number(personEntities.joséOssorio.id) }],
          },
        },
      });
    });

    // Handle topic relationships
    await prisma.$transaction(async () => {
      await prisma.project.update({
        where: { id: projectEntities.distributedQuantumComputingIEEE2024.id },
        data: {
          topics: {
            connect: [{ id: topicEntities.distributedQuantumComputing.id }],
          },
        },
      });

      const qceProjects = [
        projectEntities.qnotationIEEE2024,
        projectEntities.qgroverIEEE2024,
        projectEntities.qnotationIEEE2023,
        projectEntities.quantumCryptoIEEE2024,
      ];

      for (const project of qceProjects) {
        await prisma.project.update({
          where: { id: project.id },
          data: {
            topics: {
              connect: [{ id: topicEntities.quantumComputingEducation.id }],
            },
          },
        });
      }
    });
  } catch (error) {
    console.error("Error updating relationships:", error);
    throw error;
  }
}

async function main() {
  try {
    const personEntities = await createInitialPersonData();
    const projectEntities = await createInitialProjectData();
    const topicEntities = await createInitialTopicData();

    // await updateRelationships(personEntities, projectEntities, topicEntities);
    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();
