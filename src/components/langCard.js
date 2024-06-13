import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CardHeader } from '@mui/material';

export default function LangCard({func}) {
    return (
        <Card variant="outlined"
            sx={{
                width: '100%',
                position: 'relative',
                resize: 'horizontal',
            }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px', position: 'relative' }}>
                <CardHeader 
                    title="Languages" 
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
                    <li style={{fontWeight:'bold'}}>Python Projects:
                        <li><a href='https://github.com/lgilbuena/walter-clements' target="_blank">Discord Chat Bot</a></li>
                        <li><a href='https://github.com/lgilbuena/wordleguesser' target="_blank">Wordle Guesser</a></li>
                    </li>
                    <li style={{fontWeight:'bold'}}>JavaScript Projects:
                        <li><a href='https://github.com/lgilbuena/passwordgenerator' target="_blank">Password Generator</a></li>
                        <li>Credit Card matcher</li>
                        <li><a href='https://github.com/lgilbuena/portfolio' target="_blank">My portfolio!</a></li>
                    </li>
                    <li style={{fontWeight:'bold'}}>Java</li>                   
                    <li style={{fontWeight:'bold'}}>C++</li>
                    <li style={{fontWeight:'bold'}}>C</li>
                </CardContent>
            </div>
        </Card>
    );
}
