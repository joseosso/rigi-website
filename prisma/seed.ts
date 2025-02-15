import prisma from '../lib/db'

async function main() {
  const person = await prisma.person.create({
    data: {
      name: "John Doe",
      type: "Student",
      department: "Computer Science",
      interests: "AI, Web Development",
      github: "johndoe"
    }
  })

  const aiTopic = await prisma.topic.create({
    data: {
      name: "artificial-intelligence",
      label: "AI",
      colour: "#FF0000"
    }
  })

  const webTopic = await prisma.topic.create({
    data: {
      name: "web-development",
      label: "Web",
      colour: "#0000FF"
    }
  })

  await prisma.project.create({
    data: {
      name: "AI Project",
      description: "An AI-powered application",
      authors: "John Doe",
      studentId: person.id,
      topics: {
        connect: [
          { id: aiTopic.id },
          { id: webTopic.id }
        ]
      }
    }
  })
}
main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())