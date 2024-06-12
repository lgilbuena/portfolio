import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CardHeader } from '@mui/material';

export default function FrameCard({func}) {
    return (
        <Card variant="outlined"
            sx={{
                width: '100%',
                position: 'relative',
                resize: 'horizontal',
            }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px', position: 'relative' }}>
                <CardHeader 
                    title="Frameworks" 
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
                    <li style={{fontWeight:'bold'}}>React<li>Framework used to develop single-page, mobile, or server-rendered applications</li></li>
                    <li style={{fontWeight:'bold'}}>React-Native<li>Framework used to develop applications for Android, Android TV, iOS, macOS, tvOS, etc.</li></li>
                    <li style={{fontWeight:'bold'}}>Agile<li>A project management approach that involves breaking the project into different phases</li></li>
                </CardContent>
            </div>
        </Card>
    );
}
