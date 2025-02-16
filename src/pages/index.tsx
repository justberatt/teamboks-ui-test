import { Alert } from '@/components/ui/alert'
import { InfoIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <Alert type="success">Operation completed</Alert>  

      <Alert  
        type="warning"  
        title="Update Available"  
        description="A new version is ready to install."  
      />

      <Alert  
        type="info"  
        variant="subtle"  
        icon={<InfoIcon />}
        onClose={() => {}}  
      >  
        Custom content here  
      </Alert>
    </>
  );
}
