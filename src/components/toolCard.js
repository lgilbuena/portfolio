import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CardHeader } from '@mui/material';

export default function ToolCard({func}) {
    return (
        <Card variant="outlined"
            sx={{
                width: '100%',
                position: 'relative',
                resize: 'horizontal',
            }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px', position: 'relative' }}>
                <CardHeader 
                    title="Tools" 
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
                    <li style={{fontWeight:'bold'}}><a href='https://www.google.com/search?q=github&client=opera-gx&hs=D1Z&sca_esv=4fdeda92e1e459ac&sca_upv=1&sxsrf=ADLYWILvrK32F3vGUrLxcRKEg25ExhQjZw%3A1718227707252&ei=-xJqZu2QD5i1ptQPt46EgAg&ved=0ahUKEwit-oiBgdeGAxWYmokEHTcHAYAQ4dUDCBA&uact=5&oq=github&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmdpdGh1YjIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTIWEC4YgAQYsQMY0QMYQxiDARjHARiKBTIKEAAYgAQYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBUiSBFAAWPcCcAB4AZABAJgBaaABxwOqAQM1LjG4AQPIAQD4AQGYAgagAvEDwgIQEC4YgAQY0QMYQxjHARiKBcICExAuGIAEGLEDGNEDGEMYxwEYigXCAhAQABiABBixAxhDGIMBGIoFwgINEAAYgAQYsQMYFBiHApgDAJIHAzUuMaAHrEE&sclient=gws-wiz-serp' target='_blank'>GitHub</a></li>                   
                    <li style={{fontWeight:'bold'}}><a href='https://www.google.com/search?q=jira&client=opera-gx&hs=2LF&sca_esv=4fdeda92e1e459ac&sca_upv=1&sxsrf=ADLYWIJXWCRJ5yAXmkRufCOHxTES-3E_ZQ%3A1718227715683&ei=AxNqZrizKayIptQP2dSo4Ac&ved=0ahUKEwj4wIuFgdeGAxUshIkEHVkqCnwQ4dUDCBA&uact=5&oq=jira&gs_lp=Egxnd3Mtd2l6LXNlcnAiBGppcmEyEBAAGIAEGLEDGEMYgwEYigUyDRAAGIAEGLEDGBQYhwIyEBAAGIAEGLEDGEMYgwEYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyCxAAGIAEGLEDGIMBMg0QABiABBixAxhDGIoFSLgCUABYqAFwAHgBkAEAmAFooAH-AqoBAzMuMbgBA8gBAPgBAZgCBKACkQPCAgoQIxiABBgnGIoFwgIOEC4YgAQYsQMYgwEYigXCAhEQLhiABBixAxjRAxiDARjHAcICDhAAGIAEGLEDGIMBGIoFwgILEC4YgAQYsQMYgwHCAhAQABiABBixAxiDARiKBRgKmAMAkgcDMi4yoAe2Qg&sclient=gws-wiz-serp' target='_blank'>Jira</a></li>
                    <li style={{fontWeight:'bold'}}><a href='https://www.google.com/search?q=vscode&client=opera-gx&hs=rhu&sca_esv=4fdeda92e1e459ac&sca_upv=1&sxsrf=ADLYWIIDFkr8ipi4K2QHHw_dORVYys2CQQ%3A1718227790382&ei=ThNqZvX9FpmzptQP6Iyj8Ac&ved=0ahUKEwj13NqogdeGAxWZmYkEHWjGCH4Q4dUDCBA&uact=5&oq=vscode&gs_lp=Egxnd3Mtd2l6LXNlcnAiBnZzY29kZTIKECMYgAQYJxiKBTIEECMYJzIKECMYgAQYJxiKBTIQEAAYgAQYsQMYQxiDARiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYFBiHAjIQEAAYgAQYsQMYgwEYFBiHAjIIEAAYgAQYsQMyCxAAGIAEGLEDGIMBMggQABiABBixA0i3CVCEA1iiCHABeAGQAQCYAXegAeIDqgEDNS4xuAEDyAEA-AEBmAIHoAKBBMICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIOEAAYsAMY5AIY1gTYAQHCAhkQLhiABBiwAxjRAxhDGMcBGMgDGIoF2AECwgIWEC4YgAQYsAMYQxjUAhjIAxiKBdgBAsICCxAAGIAEGJECGIoFwgIOEAAYgAQYsQMYgwEYigXCAgUQABiABMICERAuGIAEGLEDGNEDGIMBGMcBwgINEAAYgAQYsQMYQxiKBZgDAIgGAZAGE7oGBggBEAEYCboGBggCEAEYCJIHAzYuMaAHxD0&sclient=gws-wiz-serp' target='_blank'>VSCode</a></li>
                    <li style={{fontWeight:'bold'}}><a href='https://www.google.com/search?q=appium&sca_esv=4fdeda92e1e459ac&sca_upv=1&sxsrf=ADLYWIJObSJjSyRwwqoNSeCjLX5HS6oZEQ%3A1718228351351&source=hp&ei=fxVqZtTkEqWHptQP3MWIqAM&iflsig=AL9hbdgAAAAAZmojj590NclXCV34vGv0AJAURwmJjnmc&ved=0ahUKEwiUoJe0g9eGAxWlg4kEHdwiAjUQ4dUDCBc&uact=5&oq=appium&gs_lp=Egdnd3Mtd2l6IgZhcHBpdW0yERAAGIAEGJECGLEDGIMBGIoFMgsQABiABBiRAhiKBTIQEAAYgAQYsQMYQxiDARiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYFBiHAjIKEAAYgAQYFBiHAjIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI_AhQogFY3AdwAXgAkAEAmAFqoAHtA6oBAzUuMbgBA8gBAPgBAZgCB6AChQSoAgrCAgcQIxgnGOoCwgIEECMYJ8ICChAjGIAEGCcYigXCAhYQLhiABBixAxjRAxhDGIMBGMcBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAhAQLhiABBjRAxhDGMcBGIoFwgIOEC4YgAQYsQMYgwEY5QTCAg0QABiABBixAxhDGIoFwgIIEAAYgAQYsQPCAgsQLhiABBjRAxjHAcICBxAAGIAEGAqYAwaSBwM2LjGgB8Uw&sclient=gws-wiz' target='_blank'>Appium</a></li>
                </CardContent>
            </div>
        </Card>
    );
}
