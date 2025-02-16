import { Alert } from '@/components/ui/alert'
import { InfoIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <Alert  
        type="success"  
        variant="subtle"
        description='Success, I like it'
        onClose={() => {}}> 
      </Alert>
      <Alert  
        type="error"  
        variant="outlined"
        description='Success, I like it'
        onClose={() => {}}> 
      </Alert>
      <Alert
        type="info"
        title="Did You Know?"
        description="This is an informational alert."
        icon={<InfoIcon className="w-5 h-5 text-blue-500" />} // Blue for info
      />
    </>
  );
}
