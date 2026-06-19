export type Project = {
    title: string;
    description: string;
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
  
    media?: {
      screenshots?: string[];
      gif?: string;
    };
  
    caseStudy?: {
      subtitle?: string;
      context?: string;
      problem?: string;
      solution?: string;
      engineering?: string;
      highlights?: string[];
    };
  };
  
  export const projects: Project[] = [
    {
      title: "Retail Store Application",
      description:
        "A production full-stack web application built for a client to manage products, inventory, and business operations through a secure administrative dashboard.",
  
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Node.js",
        "Express",
        "SQLite",
        "JWT",
        "Axios",
      ],
  
      liveUrl: "https://www.mszensemporium.com/",
      githubUrl: "#",
      featured: true,
  
      media: {
        screenshots: [
          "dashboard-placeholder.jpg",
          "products-placeholder.jpg",
          "edit-product-placeholder.jpg",
          "storefront-placeholder.jpg",
        ],
      },
  
      caseStudy: {
        subtitle: "Ms. Zen's Dashboard",
  
        context:
          "Built for a small business requiring a centralized system to manage products and inventory.",
  
        problem:
          "Manual workflows and lack of a structured system for managing product data and operations.",
  
        solution:
          "Full-stack dashboard with authentication, CRUD operations, and REST API integration.",
  
        engineering:
          "React frontend with Node.js backend, JWT authentication, modular routing, and separation of concerns.",
  
        highlights: [
          "Secure JWT authentication system",
          "Product management CRUD dashboard",
          "RESTful API architecture",
          "File upload functionality",
          "Active production deployment",
        ],
      },
    },
  
    {
      title: "Project Mage Lite",
      description:
        "A Java-based 2D tilemap level editor for creating game worlds with multi-layer editing, tileset importing, and save/load functionality.",
  
      tech: ["Java", "LibGDX", "MVC", "ECS"],
  
      githubUrl:
        "https://gitfront.io/r/DanBlais5078/GQo8fRVkMkSd/ProjectMageLite/",
  
      media: {
        gif: "/mage-lite-demo.gif",
      },
    },
  ];