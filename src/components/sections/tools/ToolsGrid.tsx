import burgerImg from '@/assets/burger.jpg';
import ItemCard from '@/components/ui/item-card';

const tools = [
  {
    img: burgerImg,
    imgAlt: 'QPLEX img alt',
    title: 'QPLEX',
    description: 'A cool project',
  },
  {
    img: burgerImg,
    imgAlt: 'QPLEX img alt',
    title: 'QPLEX',
    description: 'A cool project',
  },
  {
    img: burgerImg,
    imgAlt: 'QPLEX img alt',
    title: 'QPLEX',
    description: 'A cool project',
  },
  {
    img: burgerImg,
    imgAlt: 'QPLEX img alt',
    title: 'QPLEX',
    description: 'A cool project',
  },
];

const ToolsGrid = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
      {tools.map((tool, index) => (
        <ItemCard key={index} {...tool} />
      ))}
    </div>
  );
};

export default ToolsGrid;
