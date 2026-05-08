'use client';

import Marquee from "react-fast-marquee";

const clients = [
    { name: "Emirates", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/3840px-Emirates_logo.svg.png" },
    { name: "Shark Ninja", logo: "https://rise-atseven.transforms.svdcdn.com/production/images/SN.webp?w=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5338&fp-y=0.5169&dm=1777373493&s=bb03a8f6ccc46401ed5f940ae7aa6d6f" },
    { name: "Capital One", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Capital_One_logo.svg/960px-Capital_One_logo.svg.png" },
    { name: "Red Bull", logo: "https://crystalpng.com/wp-content/uploads/2025/05/red_bull_logo.png" },
    { name: "JD", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/JD_Sports_logo.svg/330px-JD_Sports_logo.svg.png" },
    { name: "Kroger", logo: "https://logos-world.net/wp-content/uploads/2021/09/Kroger-Logo.png" },
    { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/3840px-HubSpot_Logo.svg.png" },
    { name: "Xbox", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/250px-Xbox_one_logo.svg.png" },
    { name: "Sixt", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Sixt_Logo_2023.svg/1280px-Sixt_Logo_2023.svg.png" },
    { name: "Revolution Beauty London", logo: "https://theindustry.beauty/wp-content/uploads/2022/08/revolutionbeauty.jpg" },
    { name: "PlayStation", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/3840px-Playstation_logo_colour.svg.png" },
    { name: "Axa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/500px-AXA_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" },
];

export default function TheAgencyBehind() {
    return (
        <section className="py-20 border-t border-black/10">
            <div className="max-w-screen-2xl mx-auto px-8">
                <div className="flex items-center p-3 gap-5">
                    <p className="px-3 py-2">The Agency Behind...</p>
                    <Marquee pauseOnHover={false} speed={50}>
                        {clients.map((client, i) => <img key={i} src={client.logo} alt={client.name} className="h-10 mx-20" title={client.name} />)}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}