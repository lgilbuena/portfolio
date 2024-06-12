import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CardHeader } from '@mui/material';

export default function TutorCard({ func }) {
    return (
        <Card variant="outlined"
            sx={{
                width: '33%',
                position: 'relative',  // Make the card position relative
                resize: 'horizontal',  // Allow horizontal resizing
            }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px', position: 'relative' }}>
                <CardHeader 
                    title="Tutor of the CoE" 
                    titleTypographyProps={{ fontFamily: "Miracode" }} 
                    sx={{ padding: 0 }} 
                />
                <Button 
                    variant="outlined" 
                    onClick={func} 
                    sx={{ 
                        marginLeft: 'auto',  // Pushes the button to the right
                        width: 'auto'  // Adjust width as needed
                    }}
                >
                    Return
                </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CardContent fontFamily="Miracode" sx={{ width: '100%' }}>
                    My primary responsibility was to provide assistance to students within the College of Engineering, particularly in the domains of computer science classes such as Data Structures, Discrete Mathematics, and introductory courses.
                </CardContent>
            </div>
        </Card>
    );
}
