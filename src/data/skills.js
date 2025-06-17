import java from "../assests/company_java.png"
import python from "../assests/company_python.png"
import c from "../assests/company_c.png"
import js from "../assests/company_javascript.png"
import html from "../assests/company_html.png"
import css from "../assests/company_css.png"
import react from "../assests/company_react.png"
import node from "../assests/company_node.png"
import git from "../assests/company_git.png"
import github from "../assests/company_github.png"
import figma from "../assests/company_figma.png"
import photopea from "../assests/company_photopea.png"
import spline from "../assests/company_spline.png"
import ps from "../assests/company_ps.png"
import ai from "../assests/company_ai.png"
import blender from "../assests/company_blender.png"
import xcel from "../assests/company_xcel.png"
import bi from "../assests/company_bi.png"
import tableu from "../assests/company_tableu.png"
import word from "../assests/company_word.png"
import pp from "../assests/company_pp.png"
import latex from "../assests/company_latex.png"
import vs from "../assests/company_vs.png"
import intellij from "../assests/company_intellij.png"
import eclipse from "../assests/company_eclipse.png"
import codeblock from "../assests/company_codeblock.png"
import pycharm from "../assests/company_pycharm.png"
import jupyter from "../assests/company_jupyter.png"

import { table } from "framer-motion/client"
const skills = {


  programming_languages: [
    { name: "Python", level: "strong", logoSrc:python },
    { name: "Java", level: "strong", logoSrc: java },
    { name: "C", level: "proficient", logoSrc: c },
    { name: "JavaScript", level: "proficient", logoSrc: js }
  ],
  web_development: [
    { name: "HTML", role: "frontend", logoSrc:html },
    { name: "CSS", role: "frontend", logoSrc: css },
    { name: "JavaScript", role: "frontend", logoSrc: js },
    { name: "React", role: "frontend", logoSrc:react},
    { name: "Node.js", role: "backend", logoSrc:node },
    { name: "Git", role: "version_control", logoSrc: git },
    { name: "GitHub", role: "version_control", logoSrc:github }
  ],
  design_tools: [
    
    { name: "Figma", type: "UI/UX", level: "strong", logoSrc: figma },
    { name:"photopea", type:"graphics", logoSrc:photopea},
    { name: "Spline", type: "3D/Interaction", level: "strong", logoSrc: spline},
    { name: "Adobe Photoshop", type: "graphics", logoSrc:ps},
    { name: "Adobe Illustrator", type: "graphics", logoSrc:ai},
    { name: "Blender", type: "3D Modeling", level: "basic_understanding", logoSrc: blender }
  ],
  data_visualization: [
    {name:"python libraries", logoSrc:python},
    { name: "Microsoft Excel", logoSrc: xcel },
    { name: "Power BI", logoSrc:bi },
    { name: "Tableau", logoSrc: tableu },
    { name: "Microsoft Word", logoSrc:word },
    { name: "Microsoft PowerPoint", logoSrc: pp }
  ],
  documentation: [
    { name: "LaTeX", logoSrc: latex },
    { name: "Microsoft Word", logoSrc: word },
    { name: "Microsoft PowerPoint", logoSrc: pp }
  ],
  development_tools: [
    { name: "VS Code", logoSrc: vs },
    { name: "IntelliJ IDEA", logoSrc: intellij },
    { name: "Eclipse", logoSrc: eclipse },
    { name: "Code::Blocks", logoSrc:codeblock },
    { name: "PyCharm", logoSrc: pycharm },
    { name: "Jupyter Notebook", logoSrc: jupyter }
  ]
};

export default skills;