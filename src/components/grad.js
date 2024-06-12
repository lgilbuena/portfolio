import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CardHeader, CardMedia } from '@mui/material';
import me from '../images/me.jpg'

export default function GradCard({ func }) {
    return (
        <Card variant="outlined"
            sx={{
                width: '33%',
                position: 'relative',  // Make the card position relative
                resize: 'horizontal',  // Allow horizontal resizing
            }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px', position: 'relative' }}>
                <CardHeader 
                    title="Graduation" 
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
                <CardMedia style={{height: 184, width: 140}} component="img" image={me}></CardMedia>
            </div>
        </Card>
    );
}
