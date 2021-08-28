import React from 'react';

function Home() {
    // Todo: have it so that we get this list from firebase. remove static data
    const conferences = [{name: 'Henaac Conference 2019'}, {name: 'SHPE National Convention 2021'}];
    const images = ['https://upload.wikimedia.org/wikipedia/commons/4/4f/BTS_for_Dispatch_White_Day_Special%2C_27_February_2019_01.jpg',
    'https://img.imageimg.net/artist/redvelvet-official/img/profile.jpg?sr.nocv=1',
    'https://upload.wikimedia.org/wikipedia/commons/f/f4/180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_02.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/191216_Stray_Kids_for_JYP_Entertainment_Audition_%281%29.png',
    'https://cdn.filestackcontent.com/wug3DZ0QPqTKjiZQorWw/convert?cache=true&crop=14%2C1%2C1172%2C586&crop_first=true&quality=90&w=1920'];

    return (
        <div style={{margin: '1vh', display: 'flex', flexDirection: 'column'}}>
            <div style={{display:'flex', margin: '1vh'}}>
                <div className="container" style={{flexDirection: 'column', alignItems: 'center'}}>
                    <h2 style={{margin: '0'}}>Welcome to the SHPE UCF Website</h2>
                    <p style={{marginTop: '1vh'}}>
                        Welcome to Society of Hispanic Professional Engineers UCF Chapter, and the beginning of your success as a future leader. Here you will find information about our chapter, SHPE National Conference, and our future events. Please  browse our site and if you have any questions, don’t hesitate on contacting us via our Contact Us page. We are here for you!
                    </p>
                    <h2 style={{margin: '0'}}>Why join <span  className="ShpeKnighs">SHPE UCF?</span></h2>
                    <p style={{marginTop: '1vh'}}>
                        Simply because of all the invaluable knowledge, great friends, and unforgettable memories that you will have!
                    </p>
                    <h2 style={{margin: '0'}}>What we offer</h2>
                    <p style={{marginTop: '1vh'}}>
                        The opportunity to prepare yourself as a professional that no classroom setting does. You will have access to everything from professional and leadership workshops, scholarships, internships, networking opportunities with fellow engineering students from the professional chapter and industry leaders at a local and national level!
                    </p>
                    {/* <img alt="shpe image" /> */}
                </div>
                <img 
                    src={'https://upload.wikimedia.org/wikipedia/commons/4/4f/BTS_for_Dispatch_White_Day_Special%2C_27_February_2019_01.jpg'} 
                    style={{height: '60vh', width: '70vh'}}
                    alt='oh no'
                />
            </div>
            

            <div className='calendar' style={{alignSelf: 'center'}}>
                <h2 style={{textAlign: 'center'}}>Calendar</h2>
                <iframe src="https://calendar.google.com/calendar/embed?src=shpe.ucf.chapter%40gmail.com&ctz=America%2FNew_York" style={{border: '0', width: "95vh", height: "70vh", frameborder: "0", scrolling: "no"}}></iframe>
            </div>
            <div className='Conferences'>
                <h2>Conference</h2>
                {/* on click card to open model with conference info */}
                <p>
                Additionally SHPE offers all of it’s members with various opportunities to meet other engineers and members of the community through some of the conferences we participate in yearly. Want to be a partaker in our society, meet professionals in the field, build your resume, and many other things that will ensure your success in the future?
                </p>
                <p>
                    Make sure to come with us to these conferences.
                </p>
                {/* cards displaying conference information goes here */}
            </div>

            {/* footer goes here */}
        </div>
    );
}

export default Home;