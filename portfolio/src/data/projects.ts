import storefront from "../assets/storefront.png";
import storefront2 from "../assets/storefront2.png";
import productsRegular from "../assets/products0.png";
import productsAdmin from "../assets/products_admin.png"
import editingProduct from "../assets/edit_product.png"
import updatedProduct from "../assets/updated_product.png"

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
            "A production full-stack web application built from scratch to establish the first digital storefront for a physical retail business, enabling real-time product visibility updates through a secure administrative dashboard.",
        tech: [
            "React",
            "TypeScript",
            "Vite",
            "Node.js",
            "Express",
            "SQLite",
            "JWT",
            "Axios",
            "Multer",
        ],

        liveUrl: "https://www.mszensemporium.com/",
        featured: true,

        media: {
            screenshots: [
                storefront,
                storefront2,
                productsRegular,
                productsAdmin,
                editingProduct,
                updatedProduct,
            ],
        },

        caseStudy: {
            subtitle: "Ms. Zen's Dashboard",

            context:
                "Built from scratch for a physical retail business with no existing web presence, creating a centralized system to manage product information and establish a public-facing storefront.",

            problem:
                "The business had no existing website or digital system for displaying products, relying entirely on offline methods that limited visibility and customer engagement outside the physical location.",

            solution:
                "Designed and developed a full-stack web platform from the ground up, including both a public storefront and a secure admin dashboard for managing product visibility in real time.",

            engineering:
                "Built using a decoupled React frontend and Node.js/Express backend with a layered architecture (routes, services, repository pattern), JWT authentication with protected admin routes for administrative operations.",

            highlights: [
                "Built full digital storefront from scratch for a business with no prior web presence",
                "Secure JWT authentication with protected admin routes",
                "Full CRUD product management system with persistent backend storage",
                "Real-time product publishing to public-facing storefront",
                "File upload functionality",
                "Production deployment actively used by client",
            ],
        },
    },

    {
        title: "2D TiledMap Level Editor",
        description:
            "A work-in-progress Java-based 2D tilemap level editor for creating game worlds with multi-layer editing, tileset importing, and save/load functionality. Built with LibGDX.",

        tech: ["Java", "LibGDX", "MVC", "ECS"],

        githubUrl:
            "https://gitfront.io/r/DanBlais5078/GQo8fRVkMkSd/ProjectMageLite/",

        media: {
            gif: "/mage-lite-demo.gif",
        },
    },
];