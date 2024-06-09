import getProposalData from '@/lib/party/getProposalData';
import Button from '../Button';
import { useProvider } from '@/providers/Provider';

const GenerateButton = () => {
  const { factoryAddress, saleStrategy, setProposalData } = useProvider();

  const handleClick = () => {
    const response = getProposalData(factoryAddress, saleStrategy);
    setProposalData(response);
  };

  return (
    <Button onClick={handleClick} className="bg-black px-12 py-4 rounded-3xl" di>
      Generate
    </Button>
  );
};

export default GenerateButton;
