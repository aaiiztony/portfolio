export interface fadeInProps {
    direction: "right" | "left" | "up" |"down";
    type:"spring"|"";
    delay:number;
    duration:number;
}

export interface tagProps {
    name: string;
    color:string;
}
export interface ServiceCardProps {
    index: number;
    title: string;
    icon: string
}
export interface NavLinkProps {
     id:string ; 
     title:string;
}
export interface ServiceProps{
    title:string; 
    icon:string;
} 

export interface ProjectCardProps {
    name: string;
    description: string;
    tags: tagProps[];
    image: string;
    source_code_link: string;
    index:number
}

export interface ExperienceCardProps {
    title: string;
    company_name: string;
    icon: string; 
    iconBg: string; 
    date: string; 
    points: string[]
}
export interface TestimonialProps {
    testimonial:string; name:string, designation:string; company:string; image:string
}
export interface ProjectProps {name: string; description:string; tags: tagProps[]; image: string; source_code_link:string }