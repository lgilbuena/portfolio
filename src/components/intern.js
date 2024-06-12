import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CardHeader } from '@mui/material';

export default function InternCard({ func }) {
    return (
        <Card variant="outlined"
            sx={{
                width: '33%',
                position: 'relative',  // Make the card position relative
                resize: 'horizontal',  // Allow horizontal resizing
            }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px', position: 'relative' }}>
                <CardHeader 
                    title="SWE Intern" 
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
                    While at this internship, I refined my skills in web development by addressing software bugs and enhancing application accessibility. Additionally, I assisted with the development of their react-native project by crafting reusable UI components, honing my skills in mobile development.
                </CardContent>
            </div>
        </Card>
    );
}
