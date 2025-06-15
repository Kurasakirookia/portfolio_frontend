// Projects.js (not a React component, just data)

import learn_loop from "../assests/learn_loop.png"
import vibe_cart from "../assests/vibe_cart.png"
import text_editor from "../assests/text_editor.png"
import landing_page from "../assests/landing_page.png"
import portfolio from "../assests/portfolio.png"
import sih from "../assests/sih.png"
import samyog_pay from "../assests/samyog_pay.png"
const projects = [
  {
    title: "Learn Loop",
    link: "https://kurasakirookia.github.io/",
    description: "Learn Loop is a platform where we give personalized road map for the person based on his expreience on the subject",
    img:learn_loop,
    startDate: "2023-06-01",
    endDate: "2023-06-15"
  },
  {
    title: "VIBECART",
    link: "https://kurasakirookia.github.io/VIBECART/",
    description: "An e-commerce frontend project focused on user experience and product catalog.",
    img:vibe_cart,
    startDate: "2023-07-01",
    endDate: "2023-07-20"
  },
  {
    title: "Text-editor ",
    link: "https://kurasakirookia.github.io/my-app/",
    description: "A dashboard built for monitoring and managing DevOps pipelines.",
    img:text_editor,
    startDate: "2023-08-05",
    endDate: "2023-08-25"
  },
  {
    title: "Landing Page Feature",
    link: "https://kurasakirookia.github.io/LandingPageFeature/",
    img:landing_page,
    description: "A feature-rich landing page template with responsive design.",
    startDate: "2023-09-10",
    endDate: "2023-09-18"
  },
  {
    title: "portfolio",
    link: "https://kurasakirookia.github.io/portfolio/",
    img:portfolio,
    description: "A starter template for React.js apps to kickstart development.",
    startDate: "2023-10-01",
    endDate: "2023-10-10"
  },
  {
    title: "SIH Hackathon Project",
    link: "https://kurasakirookia.github.io/SIH/",
    img:sih,
    description: "A submission for the Smart India Hackathon with innovative tech solutions.",
    startDate: "2023-11-01",
    endDate: "2023-11-30"
  },
  {
    title: "SamyogPay",
    link: "https://samyogpay.netlify.app/",
    img:samyog_pay,
    description: "A decentralized payment gateway platform aimed at simplifying online transactions.",
    startDate: "2024-01-05",
    endDate: "2024-01-30"
  }
];

export default projects;
