import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

function SideList() {
    const awardsList = ['SHPE Region VII Best Chapter of the Year (2017)', 'Excellence in K-12 STEM Outreach (2015)', 'SHPE Blue Chip Award (2015)', 'Region VII SHPE – Cup Semi-Finalist (2015)',
        'SHPE Region VII – March Madness Champion (2012)', 'SHPE Jr Competition – 1st Place Winner (2012)', 'Shark Pride Award – Student Chapter (2011)', 'Regional Outstanding Chapter Award (2011)',
        'Shark Pride Award – Student Chapter (2010)', 'RLDC Region VII Participation Award (2010)', 'SHPE Region VII Chapter of the Month (2009)', 'SHPE Region VII Chapter of the Month (2006)',
        'Region VII Leadership Training Certificate of Appreciation (2002)'];

    return (
        <div >
            <div
                style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'center', width: '35vh'}}
            >
                <h3 >Our Mission</h3>
                <p >
                    To change lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support and development.
                </p>

                <h3>SHPE UCF's Awards</h3>
                 The following awards have been achieve thanks to the merit and effort of current and former members of SHPE UCF.
                        <List dense={true}
                            style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
                        >
                            {awardsList.map((award, index) => (
                                // use this tetnary condition so that we can have an underline under every cell but the last one
                                <ListItem key={index} divider={index !== (awardsList.length - 1) ? true : false}>
                                    <PlayCircleFilledIcon style={{color: '#c49f0a', marginRight: '1vh'}} />
                                    <ListItemText primary={award} />
                                </ListItem>
                            ))}
                        </List>
                <Button 
                    variant='contained'
                    style={{backgroundColor: '#c49f0a', color: 'white'}}
                    onClick={() => window.open('https://www.shpeucf.com/wp-content/uploads/2016/03/SHPE_UCF_CONSTITUTION.pdf', '_blank')}>
                    SHPE UCF Constitution
                </Button>
            </div>
        </div>
    );
}

export default SideList;