import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
const Services = () => {
  return (
<section className="max-conatiner flex justify-center flex-wrap gap-9">
{services.map((service)=>{
  return (
    <ServiceCard key={service.label} {...service} />
  )
})}
</section>  )
}

export default Services