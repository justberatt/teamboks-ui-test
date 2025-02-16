import { Alert } from '@/components/ui/alert'

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
    </>
  );
}
